<template>
  <div class="filter-events">
    <!-- Search Bar -->
    <div class="search-container">
      <input v-model="searchQuery" type="text" placeholder="Search events..." class="search-input" />
    </div>

    <!-- Filter Tabs -->
    <div class="filters">
      <div class="filter-group">
        <label>Category:</label>
        <select v-model="selectedCategory" class="filter-select">
          <option value="all">All Categories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label>Budget:</label>
        <select v-model="selectedBudget" class="filter-select">
          <option value="all">All Budgets</option>
          <option value="free">Free</option>
          <option value="low">Under $10</option>
          <option value="medium">$10 - $50</option>
          <option value="high">Over $50</option>
        </select>
      </div>
    </div>

    <!-- Events Grid -->
    <div class="events-grid">
      <div v-for="event in filteredEvents" :key="event.id" class="event-card" @click="openModal(event)">
        <div class="event-image">
          <img :src="event.image" :alt="event.title" />
          <span v-if="event.badge" class="badge">{{ event.badge }}</span>
        </div>
        <div class="event-content">
          <h3>{{ event.title }}</h3>
          <p class="location">{{ event.location }}</p>
          <p class="date">{{ event.date }}</p>
          <div class="event-footer">
            <span class="price">{{ event.price }}</span>
            <div class="tags">
              <span v-if="event.cdc" class="tag">CDC</span>
              <span v-if="event.culturepass" class="tag">CulturePass</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredEvents.length === 0" class="empty-state">
      <p>No events found matching your criteria.</p>
    </div>

    <!-- Modal -->
    <div v-if="selectedEvent" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <img :src="selectedEvent.image" :alt="selectedEvent.title" class="modal-image" />
        <div class="modal-details">
          <h2>{{ selectedEvent.title }}</h2>
          <div class="modal-info">
            <p><strong>Location:</strong> {{ selectedEvent.location }}</p>
            <p><strong>Date:</strong> {{ selectedEvent.date }}</p>
            <p><strong>Duration:</strong> {{ selectedEvent.duration }}</p>
            <p><strong>Price:</strong> {{ selectedEvent.price }}</p>
            <p><strong>Category:</strong> {{ selectedEvent.category }}</p>
          </div>
          <div class="modal-tags">
            <span v-if="selectedEvent.badge" class="badge">{{ selectedEvent.badge }}</span>
            <span v-if="selectedEvent.cdc" class="tag">CDC Vouchers</span>
            <span v-if="selectedEvent.culturepass" class="tag">CulturePass</span>
          </div>
          <button 
            class="save-btn btn btn-success" 
            @click="toggleFavourite"
            :disabled="savingFavourite"
          >
            {{ savingFavourite ? 'Saving...' : (isFavourite(selectedEvent.id) ? 'Remove from Favourites' : 'Save to Favourites') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadEvents } from '@/services/events';
import { auth, db } from '../firebase.js';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'FilterEvents',
  data() {
    return {
      events: [],
      searchQuery: '',
      selectedCategory: 'all',
      selectedBudget: 'all',
      selectedEvent: null,
      categories: [],
      currentUser: null,
      favourites: [],
      savingFavourite: false
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesCategory = this.selectedCategory === 'all' ||
          event.category === this.selectedCategory;

        const matchesBudget = this.selectedBudget === 'all' ||
          this.checkBudget(event.price);

        return matchesSearch && matchesCategory && matchesBudget;
      });
    }
  },
  async mounted() {
    try {
      this.events = await loadEvents();
      this.categories = [...new Set(this.events.map(e => e.category))];
    } catch (e) {
      console.error('Failed to load events:', e);
      this.events = [];
      this.categories = [];
    }

    // Listen for auth state changes
    onAuthStateChanged(auth, async (user) => {
      this.currentUser = user;
      if (user) {
        await this.loadFavourites();
      } else {
        this.favourites = [];
      }
    });
  },
  methods: {
    async loadFavourites() {
      if (!this.currentUser) return;
      
      try {
        const userDoc = await getDoc(doc(db, 'users', this.currentUser.uid));
        if (userDoc.exists()) {
          const favouritesList = userDoc.data().favouritesList || [];
          // Extract just the IDs for easier checking
          this.favourites = favouritesList.map(fav => fav.id);
        }
      } catch (error) {
        console.error('Error loading favourites:', error);
      }
    },

    async toggleFavourite() {
      if (!this.currentUser) {
        alert('Please log in to save favourites');
        return;
      }

      const eventId = this.selectedEvent.id;
      const userRef = doc(db, 'users', this.currentUser.uid);

      this.savingFavourite = true;

      try {
        if (this.isFavourite(eventId)) {
          // Remove from favourites
          const userDoc = await getDoc(userRef);
          const currentFavourites = userDoc.data().favouritesList || [];
          const updatedFavourites = currentFavourites.filter(fav => fav.id !== eventId);
          
          await updateDoc(userRef, {
            favouritesList: updatedFavourites
          });
          
          // Update local state
          this.favourites = this.favourites.filter(id => id !== eventId);
        } else {
          // Add to favourites
          await updateDoc(userRef, {
            favouritesList: arrayUnion(this.selectedEvent)
          });
          
          // Update local state
          this.favourites.push(eventId);
        }
      } catch (error) {
        console.error('Error toggling favourite:', error);
        alert('Failed to update favourites. Error: ' + error.message);
      } finally {
        this.savingFavourite = false;
      }
    },

    isFavourite(id) {
      return this.favourites.includes(id);
    },

    checkBudget(price) {
      const amount = parseFloat(price.replace(/[^0-9.]/g, '')) || 0;

      switch (this.selectedBudget) {
        case 'free': return amount === 0;
        case 'low': return amount > 0 && amount < 10;
        case 'medium': return amount >= 10 && amount <= 50;
        case 'high': return amount > 50;
        default: return true;
      }
    },
    openModal(event) {
      this.selectedEvent = event;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedEvent = null;
      document.body.style.overflow = 'auto';
    }
  }
};
</script>

<style scoped>
.filter-events {
  padding-block: 50px;
  padding-inline: 16px;

  background: linear-gradient(to bottom, #f8f9fa 0%, #e8f5e9 100%);
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #085702;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-group label {
  font-weight: 600;
  color: #333;
}

.filter-select {
  padding: 8px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s;
}

.filter-select:hover,
.filter-select:focus {
  border-color: #085702;
}

.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.event-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.event-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  top: 20px;
  right: 20px;
  background: #085702;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.event-image .badge { 
  position: absolute;
  top: 22px;
  right: 22px;
  z-index: 2;
}

.event-content {
  padding: 16px;
}

.event-content h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #1f2937;
}

.location,
.date {
  margin: 4px 0;
  font-size: 14px;
  color: #6b7280;
}

.event-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
}

.price {
  font-weight: 700;
  color: #10b981;
  font-size: 16px;
}

.tags {
  display: flex;
  gap: 6px;
}

.tag {
  background: #f3f4f6;
  color: #374151;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6b7280;
  font-size: 18px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  background: white;
  border: none;
  font-size: 32px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: #374151;
}

.close-btn:hover {
  background: #f3f4f6;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.modal-details {
  padding: 24px;
}

.modal-details h2 {
  margin: 0 0 20px 0;
  color: #1f2937;
}

.modal-info p {
  margin: 12px 0;
  color: #4b5563;
  line-height: 1.6;
}

.modal-tags {
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.save-btn {
  width: 100%;
  margin-top: 24px;
  padding: 12px 24px;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.save-btn:hover:not(:disabled) {
  background: #053901;
}

.save-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

/* Responsive */
@media (min-width: 576px) {
  .filter-events { 
    padding-inline: 24px; 
  }
}

@media (min-width: 768px) {
  .filter-events {
    padding-inline: 0;
    display: grid;
    grid-template-columns: 1fr 720px 1fr;
  }
  .filter-events > *:not(.modal-overlay) { 
    grid-column: 2; 
  }

  .events-grid { 
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
}

@media (min-width: 992px) {
  .filter-events { 
    grid-template-columns: 1fr 960px 1fr; 
  }

  .events-grid { 
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
  }
}

@media (min-width: 1200px) {
  .filter-events { 
    grid-template-columns: 1fr 1280px 1fr; 
  }
}

@media (max-width: 992px) {
  .event-image .badge {
    top: 22px;
    right: 22px;
  }
}

@media (max-width: 768px) {
  .event-image .badge {
    top: 24px !important;
    right: 24px !important;
  }

  .filters {
    flex-direction: column;
    gap: 12px;
  }

  .filter-group {
    width: 100%;
  }

  .filter-select {
    flex: 1;
  }

  .modal-image {
    height: 200px;
  }
}
</style>