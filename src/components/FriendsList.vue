<template>
  <div class="friends-list-container">
    <h2 class="section-title">Friends</h2>

    <!-- Search Bar -->
    <div class="search-section">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search users by username..." 
        class="search-input"
        @keyup.enter="searchUser"
      />
      <button @click="searchUser" class="btn-search bg-success">Search</button>
    </div>

    <p v-if="searchError" class="error">{{ searchError }}</p>

    <!-- Friends List -->
    <div class="friends-list-wrapper">
      <div v-if="loadingFriends" class="loading">Loading friends...</div>
      
      <div v-else-if="friends.length === 0" class="no-friends">
        No friends yet. Search for users to add them!
      </div>

      <div v-else class="friends-list">
        <div 
          v-for="friend in friends" 
          :key="friend.uid" 
          class="friend-item"
        >
          <img 
            :src="friend.photoURL || placeholderImage" 
            :alt="friend.displayName" 
            class="friend-avatar"
          />
          <span class="friend-name">{{ friend.displayName }}</span>
          <button 
            @click="openRemoveModal(friend)" 
            class="btn-remove-friend"
            title="Remove friend"
          >
            <img src="/images/remove-icon.png" alt="Remove" class="remove-icon" />
          </button>
        </div>
      </div>
    </div>

    <!-- Search Result Modal -->
    <div v-if="showSearchModal" class="modal-overlay" @click.self="closeSearchModal">
      <div class="search-modal">
        <button class="close-btn" @click="closeSearchModal">&times;</button>
        
        <div v-if="searchResult" class="search-result">
          <img 
            :src="searchResult.photoURL || placeholderImage" 
            :alt="searchResult.displayName" 
            class="result-avatar"
          />
          <h3 class="result-name">{{ searchResult.displayName }}</h3>
          
          <div v-if="isAlreadyFriend" class="already-friend">
            Already friends!
          </div>
          
          <div v-else-if="isSelf" class="self-message">
            This is you!
          </div>

          <button 
            v-else
            @click="addFriend" 
            class="btn-add-friend"
            :disabled="addingFriend"
          >
            {{ addingFriend ? 'Adding...' : 'Add Friend' }}
          </button>

          <p v-if="addFriendSuccess" class="success">{{ addFriendSuccess }}</p>
          <p v-if="addFriendError" class="error">{{ addFriendError }}</p>
        </div>
      </div>
    </div>

    <!-- Remove Friend Confirmation Modal -->
    <div v-if="showRemoveModal" class="modal-overlay" @click.self="closeRemoveModal">
      <div class="remove-modal">
        <h3>Remove Friend</h3>
        <p>Are you sure you want to remove <strong>{{ friendToRemove?.displayName }}</strong> from your friends list?</p>
        
        <div class="modal-buttons">
          <button @click="closeRemoveModal" class="btn-cancel-remove">
            Cancel
          </button>
          
          <button 
            @click="confirmRemoveFriend" 
            class="btn-confirm-remove"
            :disabled="removingFriend"
          >
            {{ removingFriend ? 'Removing...' : 'Yes, Remove' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { auth, db } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  arrayUnion,
  arrayRemove 
} from 'firebase/firestore';

const placeholderImage = '/images/placeholder-avatar.png';

// Current user
const currentUser = ref(null);

// Friends data
const friends = ref([]);
const loadingFriends = ref(true);

// Search
const searchQuery = ref('');
const searchResult = ref(null);
const showSearchModal = ref(false);
const searchError = ref('');
const addingFriend = ref(false);
const addFriendSuccess = ref('');
const addFriendError = ref('');

// Remove friend
const showRemoveModal = ref(false);
const friendToRemove = ref(null);
const removingFriend = ref(false);

// Computed
const isAlreadyFriend = computed(() => {
  if (!searchResult.value || !currentUser.value) return false;
  return friends.value.some(f => f.uid === searchResult.value.uid);
});

const isSelf = computed(() => {
  if (!searchResult.value || !currentUser.value) return false;
  return searchResult.value.uid === currentUser.value.uid;
});

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser.value = user;
      await loadFriends();
    } else {
      currentUser.value = null;
      friends.value = [];
      loadingFriends.value = false;
    }
  });
});

// Load friends list
async function loadFriends() {
  if (!currentUser.value) return;
  
  loadingFriends.value = true;
  try {
    const userDoc = await getDoc(doc(db, 'users', currentUser.value.uid));
    
    if (!userDoc.exists()) {
      friends.value = [];
      loadingFriends.value = false;
      return;
    }

    const friendsListUIDs = userDoc.data().friendsList || [];
    
    if (friendsListUIDs.length === 0) {
      friends.value = [];
      loadingFriends.value = false;
      return;
    }

    // Fetch each friend's data
    const friendsData = [];
    for (const uid of friendsListUIDs) {
      try {
        const friendDoc = await getDoc(doc(db, 'users', uid));
        if (friendDoc.exists()) {
          friendsData.push({
            uid: uid,
            displayName: friendDoc.data().displayName || 'Unknown',
            photoURL: friendDoc.data().photoURL || placeholderImage
          });
        }
      } catch (err) {
        console.error(`Error fetching friend ${uid}:`, err);
      }
    }

    friends.value = friendsData;
  } catch (err) {
    console.error('Error loading friends:', err);
  } finally {
    loadingFriends.value = false;
  }
}

// Search for user
async function searchUser() {
  searchError.value = '';
  searchResult.value = null;
  
  const query_text = searchQuery.value.trim();
  
  if (!query_text) {
    searchError.value = 'Please enter a display name to search.';
    return;
  }

  if (!currentUser.value) {
    searchError.value = 'You must be logged in to search.';
    return;
  }

  try {
    const q = query(
      collection(db, 'users'), 
      where('displayName', '==', query_text)
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      searchError.value = 'No user found with that display name.';
      return;
    }

    const userDoc = snapshot.docs[0];
    searchResult.value = {
      uid: userDoc.id,
      displayName: userDoc.data().displayName,
      photoURL: userDoc.data().photoURL || placeholderImage
    };

    showSearchModal.value = true;
  } catch (err) {
    console.error('Error searching user:', err);
    searchError.value = 'An error occurred while searching.';
  }
}

// Close search modal
function closeSearchModal() {
  showSearchModal.value = false;
  searchResult.value = null;
  addFriendSuccess.value = '';
  addFriendError.value = '';
}

// Add friend
async function addFriend() {
  if (!currentUser.value || !searchResult.value) return;

  addingFriend.value = true;
  addFriendError.value = '';
  addFriendSuccess.value = '';

  try {
    const currentUserRef = doc(db, 'users', currentUser.value.uid);
    const friendUserRef = doc(db, 'users', searchResult.value.uid);

    // Add friend's UID to current user's friendsList
    await updateDoc(currentUserRef, {
      friendsList: arrayUnion(searchResult.value.uid)
    });

    // Add current user's UID to friend's friendsList
    await updateDoc(friendUserRef, {
      friendsList: arrayUnion(currentUser.value.uid)
    });

    addFriendSuccess.value = 'Friend added successfully!';
    
    // Reload friends list
    await loadFriends();

    // Close modal after a short delay
    setTimeout(() => {
      closeSearchModal();
      searchQuery.value = '';
    }, 1500);

  } catch (err) {
    console.error('Error adding friend:', err);
    addFriendError.value = err.message || 'Failed to add friend.';
  } finally {
    addingFriend.value = false;
  }
}

// Remove friend functions
function openRemoveModal(friend) {
  friendToRemove.value = friend;
  showRemoveModal.value = true;
}

function closeRemoveModal() {
  showRemoveModal.value = false;
  friendToRemove.value = null;
}

async function confirmRemoveFriend() {
  if (!currentUser.value || !friendToRemove.value) return;

  removingFriend.value = true;

  try {
    const currentUserRef = doc(db, 'users', currentUser.value.uid);
    const friendUserRef = doc(db, 'users', friendToRemove.value.uid);

    // Remove friend's UID from current user's friendsList
    await updateDoc(currentUserRef, {
      friendsList: arrayRemove(friendToRemove.value.uid)
    });

    // Remove current user's UID from friend's friendsList
    await updateDoc(friendUserRef, {
      friendsList: arrayRemove(currentUser.value.uid)
    });

    // Reload friends list
    await loadFriends();

    // Close modal
    closeRemoveModal();

  } catch (err) {
    console.error('Error removing friend:', err);
    alert('Failed to remove friend: ' + (err.message || 'Unknown error'));
  } finally {
    removingFriend.value = false;
  }
}
</script>

<style scoped>
.friends-list-container {
  margin: 0;  /* Changed from 2rem auto */
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

.search-section {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.search-input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

.btn-search {
  padding: 0.5rem 1rem;
  background: #15803d !important;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-search:hover {
  background: #14532d !important;
}

.error {
  color: #b91c1c;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.success {
  color: #16a34a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.friends-list-wrapper {
  height: 214px;  /* Exactly 3 rows: (66px × 3) + (12px gap × 2) + 2rem padding */
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
}

.loading,
.no-friends {
  text-align: center;
  color: #6b7280;
  padding: 2rem;
}

.friends-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.friend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s;
  position: relative;
}

.friend-item:hover {
  background: #f3f4f6;
}

.friend-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
}

.friend-name {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  flex: 1;
  text-align:left;
  margin-left: 4px;
}

.btn-remove-friend {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  padding: 0;
  margin: 0;
}

.remove-icon {
  width: 20px;
  height: 20px;
  display: block;
}

.btn-remove-friend:hover {
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

.search-modal {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #6b7280;
  line-height: 1;
  padding: 0.25rem 0.5rem;
}

.close-btn:hover {
  color: #374151;
}

.search-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.result-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e5e7eb;
}

.result-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.btn-add-friend {
  padding: 0.5rem 1.5rem;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background 0.2s;
}

.btn-add-friend:hover:not(:disabled) {
  background: #16a34a;
}

.btn-add-friend:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.already-friend,
.self-message {
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  color: #6b7280;
  border-radius: 6px;
  font-size: 0.95rem;
}

/* Remove Friend Modal */
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