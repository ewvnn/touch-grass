<template>
  <div class="profile-page">
    <h1 class="title">Your Profile</h1>

    <div v-if="loading" class="status">Loading profile…</div>

    <div v-else class="profile-card">
      <!-- Left: profile picture -->
      <div class="left">
        <div class="avatar-container">
          <img
            class="avatar"
            :src="avatarUrl"
            alt="Profile picture"
          />
          <div class="avatar-buttons">
            <label for="profile-pic-upload" class="btn-upload-pic">
              Upload Picture
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              accept="image/*"
              @change="handleProfilePicChange"
              class="upload-input"
            />
            <button 
              v-if="avatarUrl !== PLACEHOLDER_IMAGE" 
              @click="deleteProfilePicture"
              class="btn-delete-pic"
              :disabled="uploading"
            >
              Delete Picture
            </button>
          </div>
          <p v-if="uploading">{{ uploading === 'deleting' ? 'Deleting...' : 'Uploading...' }}</p>
        </div>
      </div>

      <!-- Right: editable profile info -->
      <div class="right">
        <div class="info-section">
          <div class="info-row">
            <strong>Display Name:</strong>
            <div class="field-content">
              <template v-if="editingDisplayName">
                <input v-model="editDisplayName" type="text" class="input" />
                <button @click="saveDisplayName" class="btn-save-field">Save</button>
                <button @click="cancelEditDisplayName" class="btn-cancel-field">Cancel</button>
              </template>
              <template v-else>
                <span class="username">{{ displayName || 'No display name set' }}</span>
                <img 
                  src="/images/pencil-icon.png" 
                  alt="Edit" 
                  class="edit-icon"
                  @click="startEditDisplayName"
                />
              </template>
            </div>
          </div>

          <div class="info-row">
            <strong>Email:</strong>
            <div class="field-content">
              <template v-if="editingEmail">
                <input v-model="editEmail" type="email" class="input" />
                <button @click="saveEmail" class="btn-save-field">Save</button>
                <button @click="cancelEditEmail" class="btn-cancel-field">Cancel</button>
              </template>
              <template v-else>
                <span>{{ email || 'No email available' }}</span>
                <img 
                  src="/images/pencil-icon.png" 
                  alt="Edit" 
                  class="edit-icon"
                  @click="startEditEmail"
                />
              </template>
            </div>
          </div>

          <div class="info-row">
            <strong>Date Joined:</strong>
            <div class="field-content">
              <span>{{ dateJoined || 'N/A' }}</span>
            </div>
          </div>

          <p v-if="bio" class="bio">{{ bio }}</p>
          <p v-if="!hasFirestoreDoc" class="note">
            (Profile document not found — showing auth data where available.)
          </p>
        </div>

        <!-- Change Password Section -->
        <div class="change-password-section">
          <button class="btn-change-password" @click="openPasswordModal">Change Password</button>
        </div>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="error" class="error">Error: {{ error }}</p>
      </div>
    </div>

    <!-- Password Modal -->
    <div v-if="showPasswordModal" class="modal-overlay">
      <div class="modal">
        <h2>Change Password</h2>

        <label>
          Old Password
          <input type="password" v-model="oldPassword" />
        </label>

        <label>
          New Password
          <input type="password" v-model="newPassword" />
        </label>

        <label>
          Confirm New Password
          <input type="password" v-model="confirmPassword" />
        </label>

        <p v-if="passwordError" class="error">{{ passwordError }}</p>
        <p v-if="passwordSuccess" class="success">{{ passwordSuccess }}</p>

        <div class="modal-buttons">
          <button @click="changePassword" :disabled="passwordLoading">
            {{ passwordLoading ? 'Updating...' : 'Update Password' }}
          </button>
          <button @click="closePasswordModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { auth, db, storage } from '../firebase.js';
import { 
  onAuthStateChanged, 
  updateEmail, 
  updateProfile, 
  reauthenticateWithCredential, 
  EmailAuthProvider, 
  updatePassword 
} from "firebase/auth";
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// -------------------- PROFILE DATA --------------------
const loading = ref(true);
const error = ref(null);
const successMessage = ref('');

const displayName = ref('');
const email = ref('');
const bio = ref('');
const avatarUrl = ref('');
const hasFirestoreDoc = ref(false);
const dateJoined = ref('');

const PLACEHOLDER_IMAGE = '/images/placeholder-avatar.png';

const editingDisplayName = ref(false);
const editingEmail = ref(false);
const editDisplayName = ref('');
const editEmail = ref('');

const uploading = ref(false);

let currentUser = null;
let unsubscribeAuth = null;

onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
    loading.value = true;
    error.value = null;
    displayName.value = '';
    email.value = '';
    bio.value = '';
    hasFirestoreDoc.value = false;
    avatarUrl.value = PLACEHOLDER_IMAGE;
    currentUser = user;

    try {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          hasFirestoreDoc.value = true;
          const data = docSnap.data();
          displayName.value = data.displayName || user.displayName || '';
          email.value = data.email || user.email || '';
          bio.value = data.bio || '';
          if (data.createdAt) {
            const date = data.createdAt.toDate();
            dateJoined.value = date.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
          }
          const userPhotoURL = data.photoURL || user.photoURL;
          try {
            const fileRef = storageRef(storage, `profilePictures/${user.uid}`);
            avatarUrl.value = await getDownloadURL(fileRef);
          } catch {
            avatarUrl.value = PLACEHOLDER_IMAGE;
          }
        } else {
          displayName.value = user.displayName || '';
          email.value = user.email || '';
          if (user.metadata.creationTime) {
            const date = new Date(user.metadata.creationTime);
            dateJoined.value = date.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
          }
          avatarUrl.value = user.photoURL || PLACEHOLDER_IMAGE;
        }
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      error.value = err.message || String(err);
    } finally {
      loading.value = false;
    }
  });
});

onUnmounted(() => {
  if (typeof unsubscribeAuth === 'function') unsubscribeAuth();
});

// -------------------- EDIT PROFILE --------------------
function startEditDisplayName() {
  editingDisplayName.value = true;
  editDisplayName.value = displayName.value;
  successMessage.value = '';
  error.value = null;
}
function cancelEditDisplayName() { editingDisplayName.value = false; successMessage.value=''; error.value=null; }

function startEditEmail() {
  editingEmail.value = true;
  editEmail.value = email.value;
  successMessage.value = '';
  error.value = null;
}
function cancelEditEmail() { editingEmail.value = false; successMessage.value=''; error.value=null; }

async function isUnique(field, value, excludeUid) {
  const q = query(collection(db, 'users'), where(field, '==', value));
  const snapshot = await getDocs(q);
  return snapshot.empty || snapshot.docs.every(d => d.id === excludeUid);
}

async function saveDisplayName() {
  error.value = null; successMessage.value='';
  if (!currentUser) { error.value='User not logged in.'; return; }
  const newDisplayName = editDisplayName.value.trim();
  if (!newDisplayName) { error.value='Display name cannot be empty.'; return; }
  try {
    const nameUnique = await isUnique('displayName', newDisplayName, currentUser.uid);
    if (!nameUnique) { error.value='This display name is already taken.'; return; }
    if (newDisplayName !== currentUser.displayName) {
      await updateProfile(currentUser, { displayName: newDisplayName });
    }
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, { displayName: newDisplayName });
    displayName.value = newDisplayName;
    editingDisplayName.value = false;
    successMessage.value='Display name updated successfully!';
  } catch (err) { console.error(err); error.value = err.message || String(err); }
}

async function saveEmail() {
  error.value=null; successMessage.value='';
  if (!currentUser) { error.value='User not logged in.'; return; }
  const newEmail = editEmail.value.trim();
  if (!newEmail) { error.value='Email cannot be empty.'; return; }
  try {
    const emailUnique = await isUnique('email', newEmail, currentUser.uid);
    if (!emailUnique) { error.value='This email is already in use.'; return; }
    if (newEmail !== currentUser.email) { await updateEmail(currentUser,newEmail); }
    const userRef = doc(db,'users',currentUser.uid);
    await updateDoc(userRef,{email:newEmail});
    email.value=newEmail; editingEmail.value=false;
    successMessage.value='Email updated successfully!';
  } catch(err){ console.error(err); error.value=err.message||String(err); }
}

// -------------------- PROFILE PICTURE --------------------
async function handleProfilePicChange(event){
  const file=event.target.files[0]; if(!file||!currentUser) return;
  uploading.value='uploading'; successMessage.value=''; error.value=null;
  try{
    const fileRef=storageRef(storage, `profilePictures/${currentUser.uid}`);
    await uploadBytes(fileRef,file);
    const downloadURL=await getDownloadURL(fileRef);
    await updateProfile(currentUser,{photoURL:downloadURL});
    const userRef=doc(db,"users",currentUser.uid);
    await updateDoc(userRef,{photoURL:downloadURL});
    avatarUrl.value=downloadURL;
    successMessage.value="Profile picture updated successfully!";
  }catch(err){ console.error(err); error.value=err.code?`${err.code}: ${err.message}`:err.message||String(err); }
  finally{ uploading.value=false; }
}

async function deleteProfilePicture(){
  if(!currentUser) return; const confirmDelete=confirm('Are you sure?'); if(!confirmDelete) return;
  uploading.value='deleting'; error.value=''; successMessage.value='';
  try{
    const fileRef=storageRef(storage, `profilePictures/${currentUser.uid}`);
    await deleteObject(fileRef);
    await updateProfile(currentUser,{photoURL:null});
        const userRef=doc(db,"users",currentUser.uid);
    await updateDoc(userRef,{photoURL: PLACEHOLDER_IMAGE});
    avatarUrl.value = PLACEHOLDER_IMAGE;
    successMessage.value = "Profile picture deleted successfully!";
  } catch(err){
    console.error("Error deleting profile picture:", err);
    error.value = err.code ? `${err.code}: ${err.message}` : err.message || String(err);
  } finally {
    uploading.value = false;
  }
}

// -------------------- CHANGE PASSWORD --------------------
const showPasswordModal = ref(false);
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const passwordError = ref('');
const passwordSuccess = ref('');
const passwordLoading = ref(false);

function openPasswordModal() {
  showPasswordModal.value = true;
  oldPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
  passwordError.value = '';
  passwordSuccess.value = '';
}

function closePasswordModal() {
  showPasswordModal.value = false;
  oldPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
  passwordError.value = '';
  passwordSuccess.value = '';
}

async function changePassword() {
  passwordError.value = '';
  passwordSuccess.value = '';
  if (!currentUser) {
    passwordError.value = 'User not logged in.';
    return;
  }
  if (!oldPassword.value || !newPassword.value || !confirmPassword.value) {
    passwordError.value = 'All fields are required.';
    return;
  }
  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = 'New passwords do not match.';
    return;
  }

  passwordLoading.value = true;
  try {
    // Re-authenticate
    const credential = EmailAuthProvider.credential(currentUser.email, oldPassword.value);
    await reauthenticateWithCredential(currentUser, credential);

    // Update password
    await updatePassword(currentUser, newPassword.value);
    passwordSuccess.value = 'Password updated successfully!';
    oldPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
  } catch(err) {
    console.error(err);
    passwordError.value = err.code ? `${err.code}: ${err.message}` : err.message || String(err);
  } finally {
    passwordLoading.value = false;
  }
}
</script>

<style scoped>
/* -------------------- PROFILE PAGE STYLES -------------------- */
.profile-page { max-width: 1000px; margin: 2rem auto; padding: 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; text-align: center; }
.title { margin-bottom: 1.5rem; font-size: 2rem; font-weight: 600; }
.status { margin-bottom: 1rem; color: #666; }
.profile-card { display: grid; grid-template-columns: 1fr; gap: 1.5rem; border: 1px solid #e5e7eb; border-radius: 12px; padding: 2rem; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.05); align-items: stretch; margin: 0 auto; }
@media (min-width: 768px) { .profile-card { grid-template-columns: repeat(10, 1fr); } .left { grid-column: span 4; display: flex; justify-content: center; align-items: center; } .right { grid-column: span 6; text-align: left; display: flex; flex-direction: column; justify-content: space-between; height: 100%; } }
.avatar-container { display: flex; flex-direction: column; align-items: center; }
.avatar { width: 300px; height: 300px; object-fit: cover; border-radius: 50%; border: 1px solid #ddd; background: #f3f4f6; margin-bottom: 1rem; }
.upload-input { display: none; }
.avatar-buttons { display: flex; gap: 0.75rem; margin-top: 1rem; justify-content: center; }
.btn-upload-pic { padding: 0.5rem 1rem; background: #22c55e; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.95rem; min-width: 140px; height: 38px; }
.btn-upload-pic:hover { background: #16a34a; }
.btn-delete-pic { padding: 0.5rem 1rem; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.95rem; min-width: 140px; height: 38px; }
.btn-delete-pic:hover:not(:disabled) { background: #dc2626; }
.btn-delete-pic:disabled { background: #9ca3af; cursor: not-allowed; }
.info-section { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; gap: 1rem; }
.info-row { display: grid; grid-template-columns: 150px 1fr; align-items: center; font-size: 1.2rem; margin: 0; column-gap: 1rem; }
.field-content { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.input { flex: 1; min-width: 200px; padding: 0.4rem 0.6rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1.1rem; }
.btn-save-field, .btn-change-password { padding: 0.4rem 0.8rem; background: #16a34a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.9rem; }
.btn-save-field:hover, .btn-change-password:hover { background: #15803d; }
.btn-cancel-field { padding: 0.4rem 0.8rem; background: #e5e7eb; color: #374151; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.9rem; }
.btn-cancel-field:hover { background: #d1d5db; }
.btn-change-password {
  padding: 0.5rem 1rem;
  background: #16a34a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  font-size: 0.95rem;
  min-width: 140px;
  height: 38px;
}

.btn-change-password:hover {
  background: #15803d;
}
.success { color: #16a34a; margin-top: 0.75rem; font-size: 1rem; }
.error { margin-top: 0.75rem; color: #b91c1c; font-size: 1rem; }
.edit-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
  vertical-align: middle; /* ensures it aligns nicely with text */
}


/* -------------------- PASSWORD MODAL -------------------- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;    /* full viewport width */
  height: 100vh;   /* full viewport height */
  background: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center;     /* vertical centering */

  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);

  height: auto;       /* shrink to content */
  max-height: 90vh;   /* prevent going off-screen */
}




.modal input {
  padding: 0.4rem 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}

.modal button {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.modal button:first-child {
  background: #16a34a;
  color: #fff;
}

.modal button:first-child:hover {
  background: #15803d;
}

.modal button:last-child {
  background: #e5e7eb;
  color: #374151;
}

.modal button:last-child:hover {
  background: #d1d5db;
}

</style>
