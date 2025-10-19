<template>
  <div class="filter-events">
    <!-- Search Bar -->
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search events..."
        class="search-input"
      />
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
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="event-card"
        @click="openModal(event)"
      >
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
          <button class="save-btn btn btn-success" @click="saveEvent(selectedEvent)">
            Save Event
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventsData from '@/data/events.json';

export default {
  name: 'FilterEvents',
  data() {
    return {
      events: [],
      searchQuery: '',
      selectedCategory: 'all',
      selectedBudget: 'all',
      selectedEvent: null,
      categories: []
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
  mounted() {
    this.events = eventsData;
    this.categories = [...new Set(eventsData.map(e => e.category))];
  },
  methods: {
    checkBudget(price) {
      const amount = parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
      
      switch(this.selectedBudget) {
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
    },
    saveEvent(event) {
      // Implement save functionality here
      console.log('Saving event:', event);
      alert(`Event "${event.title}" has been saved!`);
    }
  }
};
</script>

<style scoped>
.filter-events {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;

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

.filter-select:hover, .filter-select:focus {
  border-color: #085702;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.event-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.event-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #085702;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.event-content {
  padding: 16px;
}

.event-content h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #1f2937;
}

.location, .date {
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  /* background: #6366f1; */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.save-btn:hover {
  background: #053901;
}

/* Responsive */
@media (max-width: 768px) {
  .events-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
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