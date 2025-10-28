<template>
  <div class="favourites-list-container">
    <h2 class="section-title">Favourite Events</h2>

    <!-- Favourites List -->
    <div class="favourites-list-wrapper">
      <div v-if="loadingFavourites" class="loading">Loading favourites...</div>
      
      <div v-else-if="favourites.length === 0" class="no-favourites">
        No favourite events yet. Start exploring and add some!
      </div>

      <div v-else class="favourites-list">
        <div 
          v-for="favourite in favourites" 
          :key="favourite.id" 
          class="favourite-item"
        >
          <img 
            :src="favourite.image" 
            :alt="favourite.title" 
            class="favourite-image"
          />
          <div class="favourite-info">
            <span class="favourite-title">{{ favourite.title }}</span>
            <span class="favourite-date">{{ favourite.date }}</span>
          </div>
          <button 
            @click="openRemoveModal(favourite)" 
            class="btn-remove-favourite"
            title="Remove from favourites"
          >
            <img src="/images/remove-icon.png" alt="Remove" class="remove-icon" />
          </button>
        </div>
      </div>
    </div>

    <!-- Remove Favourite Confirmation Modal -->
    <div v-if="showRemoveModal" class="modal-overlay" @click.self="closeRemoveModal">
      <div class="remove-modal">
        <h3>Remove Favourite</h3>
        <p>Are you sure you want to remove <strong>{{ favouriteToRemove?.title }}</strong> from your favourites?</p>
        
        <div class="modal-buttons">
          <button 
            @click="confirmRemoveFavourite" 
            class="btn-confirm-remove"
            :disabled="removingFavourite"
          >
            {{ removingFavourite ? 'Removing...' : 'Yes, Remove' }}
          </button>
          <button @click="closeRemoveModal" class="btn-cancel-remove">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth, db } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

// Current user
const currentUser = ref(null);

// Favourites data
const favourites = ref([]);
const loadingFavourites = ref(true);

// Remove favourite
const showRemoveModal = ref(false);
const favouriteToRemove = ref(null);
const removingFavourite = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser.value = user;
      await loadFavourites();
    } else {
      currentUser.value = null;
      favourites.value = [];
      loadingFavourites.value = false;
    }
  });
});

// Load favourites list
async function loadFavourites() {
  if (!currentUser.value) return;
  
  loadingFavourites.value = true;
  try {
    const userDoc = await getDoc(doc(db, 'users', currentUser.value.uid));
    
    if (!userDoc.exists()) {
      favourites.value = [];
      loadingFavourites.value = false;
      return;
    }

    const favouritesList = userDoc.data().favouritesList || [];
    favourites.value = favouritesList;

  } catch (err) {
    console.error('Error loading favourites:', err);
  } finally {
    loadingFavourites.value = false;
  }
}

// Remove favourite functions
function openRemoveModal(favourite) {
  favouriteToRemove.value = favourite;
  showRemoveModal.value = true;
}

function closeRemoveModal() {
  showRemoveModal.value = false;
  favouriteToRemove.value = null;
}

async function confirmRemoveFavourite() {
  if (!currentUser.value || !favouriteToRemove.value) return;

  removingFavourite.value = true;

  try {
    const currentUserRef = doc(db, 'users', currentUser.value.uid);
    
    // Remove the favourite from the array
    const updatedFavourites = favourites.value.filter(
      fav => fav.id !== favouriteToRemove.value.id
    );

    await updateDoc(currentUserRef, {
      favouritesList: updatedFavourites
    });

    // Update local state
    favourites.value = updatedFavourites;

    // Close modal
    closeRemoveModal();

  } catch (err) {
    console.error('Error removing favourite:', err);
    alert('Failed to remove favourite: ' + (err.message || 'Unknown error'));
  } finally {
    removingFavourite.value = false;
  }
}
</script>

<style scoped>
.favourites-list-container {
  margin: 0;  /* Changed from 2rem auto, removed max-width */
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}

.favourites-list-wrapper {
  height: 268px;  /* Increased to account for missing search bar */
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
}

.loading,
.no-favourites {
  text-align: center;
  color: #6b7280;
  padding: 2rem;
}

.favourites-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.favourite-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s;
  position: relative;
}

.favourite-item:hover {
  background: #f3f4f6;
}

.favourite-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
  flex-shrink: 0;
}

.favourite-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.favourite-title {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.favourite-date {
  font-size: 0.875rem;
  color: #6b7280;
}

.btn-remove-favourite {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  padding: 0;
  margin: 0;
  flex-shrink: 0;
}

.remove-icon {
  width: 20px;
  height: 20px;
  display: block;
}

.btn-remove-favourite:hover {
  opacity: 0.7;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.remove-modal {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.remove-modal h3 {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: #111827;
}

.remove-modal p {
  margin: 0 0 1.5rem 0;
  color: #374151;
  line-height: 1.5;
}

.modal-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.btn-confirm-remove {
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-confirm-remove:hover:not(:disabled) {
  background: #dc2626;
}

.btn-confirm-remove:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.btn-cancel-remove {
  padding: 0.5rem 1rem;
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-cancel-remove:hover {
  background: #d1d5db;
}
</style>