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
          <input
            type="file"
            accept="image/*"
            @change="handleProfilePicChange"
            class="upload-input"
          />
          <p v-if="uploading">Uploading...</p>
        </div>
      </div>

      <!-- Right: editable profile info -->
      <div class="right">
        <div class="info-section">
          <div class="info-row">
            <strong>Display Name:</strong>
            <template v-if="editing">
              <input v-model="editDisplayName" type="text" class="input" />
            </template>
            <template v-else>
              <span class="username">{{ displayName || 'No display name set' }}</span>
            </template>
          </div>

          <div class="info-row">
            <strong>Email:</strong>
            <template v-if="editing">
              <input v-model="editEmail" type="email" class="input" />
            </template>
            <template v-else>
              <span>{{ email || 'No email available' }}</span>
            </template>
          </div>

          <p v-if="bio" class="bio">{{ bio }}</p>
          <p v-if="!hasFirestoreDoc" class="note">
            (Profile document not found — showing auth data where available.)
          </p>
        </div>

        <div class="button-row">
          <button v-if="!editing" class="btn edit" @click="startEdit">Edit</button>
          <button v-if="editing" class="btn save" @click="saveChanges">Save</button>
          <button v-if="editing" class="btn cancel" @click="cancelEdit">Cancel</button>
        </div>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="error" class="error">Error: {{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { auth, db, storage } from '../firebase.js';
import { onAuthStateChanged, updateEmail, updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const loading = ref(true);
const error = ref(null);
const successMessage = ref('');

const displayName = ref('');
const email = ref('');
const bio = ref('');
const avatarUrl = ref('/placeholder-avatar.png');
const hasFirestoreDoc = ref(false);

const editing = ref(false);
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
          avatarUrl.value = data.photoURL || data.avatarUrl || user.photoURL || '/placeholder-avatar.png';
        } else {
          displayName.value = user.displayName || '';
          email.value = user.email || '';
          avatarUrl.value = user.photoURL || '/placeholder-avatar.png';
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

function startEdit() {
  editing.value = true;
  editDisplayName.value = displayName.value;
  editEmail.value = email.value;
  successMessage.value = '';
  error.value = null;
}

function cancelEdit() {
  editing.value = false;
  successMessage.value = '';
  error.value = null;
}

async function isUnique(field, value, excludeUid) {
  const q = query(collection(db, 'users'), where(field, '==', value));
  const snapshot = await getDocs(q);
  return snapshot.empty || snapshot.docs.every((d) => d.id === excludeUid);
}

async function saveChanges() {
  error.value = null;
  successMessage.value = '';

  if (!currentUser) {
    error.value = 'User not logged in.';
    return;
  }

  const newDisplayName = editDisplayName.value.trim();
  const newEmail = editEmail.value.trim();

  if (!newDisplayName || !newEmail) {
    error.value = 'Display name and email cannot be empty.';
    return;
  }

  try {
    const nameUnique = await isUnique('displayName', newDisplayName, currentUser.uid);
    if (!nameUnique) {
      error.value = 'This display name is already taken.';
      return;
    }

    const emailUnique = await isUnique('email', newEmail, currentUser.uid);
    if (!emailUnique) {
      error.value = 'This email is already in use.';
      return;
    }

    const authUpdates = [];
    if (newDisplayName !== currentUser.displayName) {
      authUpdates.push(updateProfile(currentUser, { displayName: newDisplayName }));
    }
    if (newEmail !== currentUser.email) {
      authUpdates.push(updateEmail(currentUser, newEmail));
    }
    await Promise.all(authUpdates);

    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, {
      displayName: newDisplayName,
      email: newEmail,
    });

    displayName.value = newDisplayName;
    email.value = newEmail;
    editing.value = false;
    successMessage.value = 'Profile updated successfully!';
  } catch (err) {
    console.error('Error updating profile:', err);
    error.value = err.message || String(err);
  }
}

async function handleProfilePicChange(event) {
  const file = event.target.files[0];
  if (!file || !currentUser) {
    console.log('No file or no user');
    return;
  }

  console.log('User authenticated:', currentUser.uid);
  console.log('User email verified:', currentUser.emailVerified);
  
  uploading.value = true;
  successMessage.value = '';
  error.value = null;

  try {
    const fileRef = storageRef(storage, `profilePictures/${currentUser.uid}`);
    await uploadBytes(fileRef, file);

    const downloadURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, { photoURL: downloadURL });

    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, { photoURL: downloadURL });

    avatarUrl.value = downloadURL;
    successMessage.value = "Profile picture updated successfully!";
  } catch (err) {
    console.error("Full error object:", err);
    console.error("Error code:", err.code);
    error.value = err.code ? `${err.code}: ${err.message}` : err.message || String(err);
  } finally {
    uploading.value = false;
  }
}

</script>

<style scoped>
.profile-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.title {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
}

.status {
  margin-bottom: 1rem;
  color: #666;
}

.profile-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  margin: 0 auto;
  align-items: stretch;
}

@media (min-width: 768px) {
  .profile-card {
    grid-template-columns: repeat(10, 1fr);
  }

  .left {
    grid-column: span 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    grid-column: span 5;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}

.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: #f3f4f6;
  margin-bottom: 1rem;
}

.upload-input {
  margin-top: 0.5rem;
}

.info-section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info-row {
  display: grid;
  grid-template-columns: 140px auto;
  align-items: center;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.info-row strong {
  font-weight: 600;
  color: #111827;
  font-size: 1.2rem;
}

.info-row span {
  color: #374151;
  word-break: break-word;
  font-size: 1.2rem;
}

.bio {
  font-size: 1.1rem;
  color: #4b5563;
}

.note {
  font-size: 1rem;
  color: #6b7280;
}

.input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem 0.7rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1.15rem;
}

.button-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  font-size: 1rem;
}

.btn.edit {
  background: #3b82f6;
  color: white;
}
.btn.edit:hover {
  background: #2563eb;
}
.btn.save {
  background: #16a34a;
  color: white;
}
.btn.save:hover {
  background: #15803d;
}
.btn.cancel {
  background: #e5e7eb;
}
.btn.cancel:hover {
  background: #d1d5db;
}

.success {
  color: #16a34a;
  margin-top: 0.5rem;
}

.error {
  margin-top: 0.5rem;
  color: #b91c1c;
}
</style>
