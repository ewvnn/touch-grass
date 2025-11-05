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
            <label for="profile-pic-upload" class="btn-upload-pic bg-success">
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
            <strong>Username:</strong>
            <div class="field-content">
              <template v-if="editingDisplayName">
                <input v-model="editDisplayName" type="text" class="input" />
                <button @click="saveDisplayName" class="btn-save-field">Save</button>
                <button @click="cancelEditDisplayName" class="btn-cancel-field">Cancel</button>
              </template>
              <template v-else>
                <span class="username">{{ displayName || 'No username set' }}</span>
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
              <span>{{ email || 'No email available' }}</span>
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
            (Profile document not found – showing auth data where available.)
          </p>
        </div>

        <!-- Change Password Section -->
        <div class="change-password-section">
          <button class="btn-change-password bg-success" @click="openPasswordModal">Change Password</button>
        </div>
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

    <!-- Crop Modal -->
    <div v-if="showCropModal" class="crop-modal-overlay">
      <div class="crop-modal">
        <h2>Adjust Your Profile Picture</h2>
        
        <div
          ref="cropContainer"
          class="crop-container"
          @mousedown="handleCropMouseDown"
          @mousemove="handleCropMouseMove"
          @mouseup="handleCropMouseUp"
          @mouseleave="handleCropMouseUp"
          @touchstart="handleCropTouchStart"
          @touchmove="handleCropTouchMove"
          @touchend="handleCropMouseUp"
        >
          <img
            v-if="cropImageSrc"
            ref="cropImage"
            :src="cropImageSrc"
            alt="Preview"
            class="crop-image"
            :style="{
              left: cropPosition.x + 'px',
              top: cropPosition.y + 'px',
              width: imageDisplayWidth + 'px',
              height: imageDisplayHeight + 'px',
            }"
            draggable="false"
          />
          
          <svg class="crop-overlay">
            <defs>
              <mask id="circleMask">
                <rect width="100%" height="100%" fill="white" />
                <circle cx="50%" cy="50%" r="150" fill="black" />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(0, 0, 0, 0.5)"
              mask="url(#circleMask)"
            />
            <circle
              cx="50%"
              cy="50%"
              r="150"
              fill="none"
              stroke="white"
              stroke-width="3"
              stroke-dasharray="10,5"
            />
          </svg>
        </div>

        <div class="zoom-control">
          <label>Zoom: {{ cropZoom.toFixed(2) }}x</label>
          <input
            type="range"
            :min="minZoom"
            :max="maxZoom"
            step="0.01"
            v-model.number="cropZoom"
            class="zoom-slider"
          />
        </div>

        <div class="crop-modal-buttons">
          <button @click="handleCropCancel" class="btn-cancel">Cancel</button>
          <button @click="handleCropConfirm" class="btn-confirm">Crop & Upload</button>
        </div>

        <canvas ref="cropCanvas" style="display: none;"></canvas>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" :class="['toast', toastType]">
      {{ toastMessage }}
    </div>
  
    
    <div class="lists-container">
      <FriendsList />
      <FavouritesList />
    </div>
  </div>

</template>

<script setup>

import FriendsList from '../components/FriendsList.vue';
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue';
import { auth, db, storage } from '../firebase.js';
import FavouritesList from '../components/FavouritesList.vue';
import { 
  onAuthStateChanged, 
  updateProfile, 
  reauthenticateWithCredential, 
  EmailAuthProvider, 
  updatePassword 
} from "firebase/auth";
import { toTitleCase } from "@/lib/strings";
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
const editDisplayName = ref('');

const uploading = ref(false);

const showCropModal = ref(false);
const selectedImageFile = ref(null);
const cropImageSrc = ref('');
const cropZoom = ref(1);
const cropPosition = ref({ x: 0, y: 0 });
const cropIsDragging = ref(false);
const cropDragStart = ref({ x: 0, y: 0 });
const cropContainer = ref(null);
const cropImage = ref(null);
const cropCanvas = ref(null);

// Toast notification state
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('success'); // 'success' or 'error'
let toastTimeout = null;

// Image dimensions
const originalImageWidth = ref(0);
const originalImageHeight = ref(0);
const minZoom = ref(0.1);
const maxZoom = ref(3);

// Function to show toast notification
function showToastNotification(message, type = 'success') {
  // Clear any existing timeout
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  
  // Auto-hide after 3 seconds
  toastTimeout = setTimeout(() => {
    showToast.value = false;
  }, 3000);
}

// Computed display dimensions based on zoom
const imageDisplayWidth = computed(() => originalImageWidth.value * cropZoom.value);
const imageDisplayHeight = computed(() => originalImageHeight.value * cropZoom.value);

const CROP_RADIUS = 150; // The radius of the crop circle

// Calculate min zoom so the circle always fits within the image
function calculateMinZoom() {
  if (!cropContainer.value || !originalImageWidth.value || !originalImageHeight.value) {
    return 0.1;
  }
  
  const containerWidth = cropContainer.value.offsetWidth;
  const containerHeight = cropContainer.value.offsetHeight;
  
  // The circle needs to fit entirely within the image
  // So the image's scaled dimensions must be at least 2 * CROP_RADIUS (diameter)
  const minZoomForWidth = (2 * CROP_RADIUS) / originalImageWidth.value;
  const minZoomForHeight = (2 * CROP_RADIUS) / originalImageHeight.value;
  
  // Use the larger of the two to ensure circle fits in both dimensions
  return Math.max(minZoomForWidth, minZoomForHeight);
}

// Constrain position so circle never goes outside image bounds
function constrainPosition(pos) {
  if (!cropContainer.value) return pos;
  
  const containerWidth = cropContainer.value.offsetWidth;
  const containerHeight = cropContainer.value.offsetHeight;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  
  const scaledWidth = imageDisplayWidth.value;
  const scaledHeight = imageDisplayHeight.value;
  
  let newX = pos.x;
  let newY = pos.y;
  
  // Calculate the boundaries
  // The circle center is at (centerX, centerY)
  // The circle should not extend beyond the image edges
  
  // Left boundary: circle's left edge should not go past image's left edge
  const minX = centerX - CROP_RADIUS;
  if (newX > minX) newX = minX;
  
  // Right boundary: circle's right edge should not go past image's right edge
  const maxX = centerX + CROP_RADIUS - scaledWidth;
  if (newX < maxX) newX = maxX;
  
  // Top boundary: circle's top edge should not go past image's top edge
  const minY = centerY - CROP_RADIUS;
  if (newY > minY) newY = minY;
  
  // Bottom boundary: circle's bottom edge should not go past image's bottom edge
  const maxY = centerY + CROP_RADIUS - scaledHeight;
  if (newY < maxY) newY = maxY;
  
  return { x: newX, y: newY };
}

// Watch zoom changes and constrain position
watch(cropZoom, () => {
  cropPosition.value = constrainPosition(cropPosition.value);
});

// Watch for when a file is selected to load it
watch(selectedImageFile, (file) => {
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        originalImageWidth.value = img.width;
        originalImageHeight.value = img.height;
        cropImageSrc.value = e.target.result;
        
        // Calculate and set min zoom
        nextTick(() => {
          minZoom.value = calculateMinZoom();
          cropZoom.value = minZoom.value;
          
          // Center the image
          if (cropContainer.value) {
            const containerWidth = cropContainer.value.offsetWidth;
            const containerHeight = cropContainer.value.offsetHeight;
            const initialPos = {
              x: (containerWidth - imageDisplayWidth.value) / 2,
              y: (containerHeight - imageDisplayHeight.value) / 2
            };
            cropPosition.value = constrainPosition(initialPos);
          }
        });
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

function handleCropMouseDown(e) {
  cropIsDragging.value = true;
  cropDragStart.value = {
    x: e.clientX - cropPosition.value.x,
    y: e.clientY - cropPosition.value.y
  };
}

function handleCropMouseMove(e) {
  if (cropIsDragging.value) {
    const newPos = {
      x: e.clientX - cropDragStart.value.x,
      y: e.clientY - cropDragStart.value.y
    };
    cropPosition.value = constrainPosition(newPos);
  }
}

function handleCropMouseUp() {
  cropIsDragging.value = false;
}

function handleCropTouchStart(e) {
  const touch = e.touches[0];
  cropIsDragging.value = true;
  cropDragStart.value = {
    x: touch.clientX - cropPosition.value.x,
    y: touch.clientY - cropPosition.value.y
  };
}

function handleCropTouchMove(e) {
  if (cropIsDragging.value && e.touches[0]) {
    const touch = e.touches[0];
    const newPos = {
      x: touch.clientX - cropDragStart.value.x,
      y: touch.clientY - cropDragStart.value.y
    };
    cropPosition.value = constrainPosition(newPos);
  }
}

async function handleCropConfirm() {
  const canvas = cropCanvas.value;
  const container = cropContainer.value;
  const img = cropImage.value;

  if (!canvas || !container || !img) return;

  const cropSize = 300;
  canvas.width = cropSize;
  canvas.height = cropSize;
  const ctx = canvas.getContext('2d');

  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;

  // Calculate which part of the original image to crop
  // The circle center in container coordinates is (centerX, centerY)
  // Convert to image coordinates
  const imgCenterX = (centerX - cropPosition.value.x) / cropZoom.value;
  const imgCenterY = (centerY - cropPosition.value.y) / cropZoom.value;
  
  // Source coordinates in original image (top-left of crop area)
  const sourceX = imgCenterX - (CROP_RADIUS / cropZoom.value);
  const sourceY = imgCenterY - (CROP_RADIUS / cropZoom.value);
  const sourceSize = (2 * CROP_RADIUS) / cropZoom.value;

  // Draw the cropped circular image
  ctx.beginPath();
  ctx.arc(cropSize / 2, cropSize / 2, cropSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(
    img,
    sourceX,
    sourceY,
    sourceSize,
    sourceSize,
    0,
    0,
    cropSize,
    cropSize
  );

  canvas.toBlob((blob) => {
    if (blob) {
      handleCropComplete(blob);
    }
  }, 'image/jpeg', 0.95);
}

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
          displayName.value = toTitleCase(data.displayName || user.displayName || '');
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
}
function cancelEditDisplayName() { editingDisplayName.value = false; }

async function isUnique(field, value, excludeUid) {
  const q = query(collection(db, 'users'), where(field, '==', value));
  const snapshot = await getDocs(q);
  return snapshot.empty || snapshot.docs.every(d => d.id === excludeUid);
}

async function saveDisplayName() {
  if (!currentUser) { 
    showToastNotification('User not logged in.', 'error');
    return; 
  }
  const newDisplayName = toTitleCase(editDisplayName.value.trim());
  if (!newDisplayName) { 
    showToastNotification('Username cannot be empty.', 'error');
    return; 
  }
  try {
    const nameUnique = await isUnique('displayName', newDisplayName, currentUser.uid);
    if (!nameUnique) { 
      showToastNotification('This username is already taken.', 'error');
      return; 
    }
    if (newDisplayName !== currentUser.displayName) {
      await updateProfile(currentUser, { displayName: newDisplayName });
    }
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, { displayName: newDisplayName });
    displayName.value = newDisplayName;
    editingDisplayName.value = false;
    showToastNotification('Username updated successfully!');
    
    // Force reload to update navbar
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (err) { 
    console.error(err); 
    showToastNotification(err.message || String(err), 'error');
  }
}

// -------------------- PROFILE PICTURE --------------------
async function handleProfilePicChange(event) {
  const file = event.target.files[0];
  if (!file || !currentUser) return;
  
  // Show the crop modal instead of uploading directly
  selectedImageFile.value = file;
  showCropModal.value = true;
  
  // Reset the input so the same file can be selected again
  event.target.value = '';
}

async function deleteProfilePicture(){
  if (!currentUser) return; 
  const confirmDelete = confirm('Are you sure?'); 
  if (!confirmDelete) return;
  
  uploading.value = 'deleting';
  
  try {
    const fileRef = storageRef(storage, `profilePictures/${currentUser.uid}`);
    await deleteObject(fileRef);
    await updateProfile(currentUser, { photoURL: null });
    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, { photoURL: PLACEHOLDER_IMAGE });
    avatarUrl.value = PLACEHOLDER_IMAGE;
    showToastNotification("Profile picture deleted successfully!");
  } catch(err) {
    console.error("Error deleting profile picture:", err);
    showToastNotification(err.code ? `${err.code}: ${err.message}` : err.message || String(err), 'error');
  } finally {
    uploading.value = false;
  }
}

async function handleCropComplete(croppedBlob) {
  if (!currentUser) return;
  
  uploading.value = 'uploading';
  showCropModal.value = false;
  
  try {
    const fileRef = storageRef(storage, `profilePictures/${currentUser.uid}`);
    await uploadBytes(fileRef, croppedBlob);
    const downloadURL = await getDownloadURL(fileRef);
    await updateProfile(currentUser, { photoURL: downloadURL });
    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, { photoURL: downloadURL });
    avatarUrl.value = downloadURL;
    showToastNotification("Profile picture updated successfully!");
  } catch (err) {
    console.error(err);
    showToastNotification(err.code ? `${err.code}: ${err.message}` : err.message || String(err), 'error');
  } finally {
    uploading.value = false;
  }
}

function handleCropCancel() {
  showCropModal.value = false;
  selectedImageFile.value = null;
  cropImageSrc.value = '';
  cropZoom.value = 1;
  cropPosition.value = { x: 0, y: 0 };
  originalImageWidth.value = 0;
  originalImageHeight.value = 0;
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
.profile-page { 
  max-width: 1000px; 
  margin: 2rem auto; 
  padding: 1rem; 
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; 
  text-align: center;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .profile-page {
    padding: 0.5rem;
    margin: 1rem auto;
  }
}

.title { margin-bottom: 1.5rem; font-size: 2rem; font-weight: 600; }
.status { margin-bottom: 1rem; color: #666; }

.profile-card { 
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 1.5rem; 
  border: 1px solid #e5e7eb; 
  border-radius: 12px; 
  padding: 2rem; 
  background: #fff; 
  box-shadow: 0 2px 6px rgba(0,0,0,0.05); 
  align-items: stretch; 
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
}

@media (max-width: 768px) {
  .profile-card {
    padding: 1rem;
  }
}

@media (min-width: 768px) { 
  .profile-card { grid-template-columns: repeat(10, 1fr); } 
  .left { grid-column: span 4; display: flex; justify-content: center; align-items: center; } 
  .right { grid-column: span 6; text-align: left; display: flex; flex-direction: column; justify-content: space-between; height: 100%; } 
}

.avatar-container { display: flex; flex-direction: column; align-items: center; }

.avatar { 
  width: 300px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 50%; 
  border: 1px solid #ddd; 
  background: #f3f4f6; 
  margin-bottom: 1rem;
  max-width: 100%;
}

@media (max-width: 768px) {
  .avatar {
    width: 200px;
    height: 200px;
  }
}

.upload-input { display: none; }
.avatar-buttons { display: flex; gap: 0.75rem; margin-top: 1rem; justify-content: center; flex-wrap: wrap; }

.btn-upload-pic { padding: 0.5rem 1rem; background: #22c55e; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.95rem; min-width: 140px; height: 40px;}
.btn-upload-pic:hover { background: #16a34a; }
.btn-delete-pic { padding: 0.5rem 1rem; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.95rem; min-width: 140px; height: 40px; }
.btn-delete-pic:hover:not(:disabled) { background: #dc2626; }
.btn-delete-pic:disabled { background: #9ca3af; cursor: not-allowed; }
.info-section { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; gap: 1rem; }

.info-row { 
  display: grid; 
  grid-template-columns: 150px 1fr; 
  align-items: center; 
  font-size: 1.2rem; 
  margin: 0; 
  column-gap: 1rem;
  word-break: break-word;
}

@media (max-width: 768px) {
  .info-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    font-size: 1rem;
  }
}

.field-content { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }

.input { 
  flex: 1; 
  min-width: 200px; 
  padding: 0.4rem 0.6rem; 
  border: 1px solid #d1d5db; 
  border-radius: 6px; 
  font-size: 1.1rem;
  max-width: 100%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .input {
    min-width: 0;
    width: 100%;
  }
}

.btn-save-field, .btn-change-password { padding: 0.4rem 0.8rem; background: #16a34a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.9rem; }
.btn-save-field:hover, .btn-change-password:hover { background: #15803d; }
.btn-cancel-field { padding: 0.4rem 0.8rem; background: #e5e7eb; color: #374151; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; font-size: 0.9rem; }
.btn-cancel-field:hover { background: #d1d5db; }
.btn-change-password {
  padding: 0.5rem 1rem;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  font-size: 0.95rem;
  min-width: 140px;
  height: 40px;
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
  vertical-align: middle;
}


/* -------------------- PASSWORD MODAL -------------------- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
}

.modal {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  max-height: 90vh;
  border: 3px solid black;
  box-sizing: border-box;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .modal {
    padding: 1.5rem;
  }
}

.modal input {
  padding: 0.4rem 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
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

.lists-container {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 968px) {
  .lists-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
}

/* -------------------- CROP MODAL -------------------- */
.crop-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 1rem;
  box-sizing: border-box;
}

.crop-modal {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border: 3px solid black;
  max-height: 90vh;
  overflow-y: auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .crop-modal {
    padding: 1rem;
  }
}

.crop-modal h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .crop-modal h2 {
    font-size: 1.25rem;
  }
}

.crop-container {
  position: relative;
  width: 100%;
  height: 400px;
  background: #f3f4f6;
  border-radius: 8px;
  overflow: hidden;
  cursor: move;
  user-select: none;
}

@media (max-width: 768px) {
  .crop-container {
    height: 300px;
  }
}

.crop-image {
  position: absolute;
  transform-origin: top left;
  pointer-events: none;
  user-select: none;
}

.crop-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.zoom-control {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.zoom-control label {
  font-size: 0.9rem;
  font-weight: 500;
}

.zoom-slider {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}

.zoom-slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #22c55e;
  border-radius: 50%;
  cursor: pointer;
}

.zoom-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #22c55e;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.crop-modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.btn-cancel {
  padding: 0.5rem 1rem;
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-cancel:hover {
  background: #d1d5db;
}

.btn-confirm {
  padding: 0.5rem 1rem;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-confirm:hover {
  background: #16a34a;
}
</style>