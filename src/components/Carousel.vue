<template>
  <div class="container py-5" id="events">
    <h2 class="section-title">Featured Events</h2>
    <!-- Carousel Container -->
    <div class="position-relative overflow-hidden" style="margin: 30px auto" @mouseenter="stopAutoScroll"
      @mouseleave="startAutoScroll">

      <!-- Previous Button -->
      <button class="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow-sm"
        style="z-index: 10; border-radius: 50%; width: 40px; height: 40px;" @click="scrollPrev"
        :disabled="currentIndex === 0">
        <span aria-hidden="true">&lsaquo;</span>
      </button>

      <!-- Carousel Items -->
      <div class="overflow-hidden">
        <div class="d-flex transition-transform"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
          style="transition: transform 0.3s ease;">
          <div v-for="event in displayEvents" :key="event.id" class="flex-shrink-0 px-2 carousel-item-wrapper">
            <div class="card h-100 shadow-sm cursor-pointer" @click="openModal(event)" style="cursor: pointer;">
              <img :src="event.image" class="card-img-top" :alt="event.title"
                style="height: 200px; object-fit: cover;" />
              <div class="card-body">
                <span class="badge bg-success mb-2">{{ event.badge }}</span>
                <span class="badge bg-success ms-2">{{ event.category }}</span>
                <h5 class="card-title mb-2">{{ event.title }}</h5>
                <p class="card-text text-muted mb-1">
                  <small>{{ event.location }}</small>
                </p>
                <p class="card-text text-muted mb-1">
                  <small>{{ event.date }}</small>
                </p>
                <p class="card-text fw-bold">{{ event.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Button -->
      <button class="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow-sm"
        style="z-index: 10; border-radius: 50%; width: 40px; height: 40px;" @click="scrollNext"
        :disabled="currentIndex >= endIndex">
        <span aria-hidden="true">&rsaquo;</span>
      </button>
    </div>

    <!-- Modal -->
    <div class="modal fade" :class="{ show: showModal, 'd-block': showModal }" tabindex="-1"
      style="background-color: rgba(0,0,0,0.5);" @click.self="closeModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" v-if="selectedEvent">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedEvent.title }}</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <!-- Fixed-size modal image -->
            <img :src="selectedEvent.image" class="img-fluid rounded mb-3" :alt="selectedEvent.title"
              style="width: 100%; height: 300px; object-fit: cover;" />
            <div class="mb-2">
              <span class="badge bg-success">{{ selectedEvent.badge }}</span>
              <span class="badge bg-success ms-2">{{ selectedEvent.category }}</span>
            </div>
            <p class="mb-2"><strong>Location:</strong> {{ selectedEvent.location }}</p>
            <p class="mb-2"><strong>Date:</strong> {{ selectedEvent.date }}</p>
            <p class="mb-2"><strong>Duration:</strong> {{ selectedEvent.duration }}</p>
            <p class="mb-2"><strong>Price:</strong> {{ selectedEvent.price }}</p>

            <div class="modal-tags">
              <span v-if="selectedEvent.cdc" class="tag">CDC Vouchers</span>
              <span v-if="selectedEvent.culturepass" class="tag">CulturePass</span>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="button" class="btn btn-success" @click="toggleFavourite" :disabled="savingFavourite">
              {{ savingFavourite ? 'Saving...' : (isFavourite(selectedEvent.id) ? 'Remove from Favourites' : 'Save to Favourites') }}
            </button>
          </div>
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
  name: 'EventCarousel',
  data() {
    return {
      events: [],
      currentIndex: 0,
      showModal: false,
      selectedEvent: null,
      favourites: [],
      itemsPerView: 3,
      autoScrollInterval: null,
      autoScrollDelay: 3000, // Auto scroll every 3 seconds
      currentUser: null,
      savingFavourite: false
    };
  },
  async mounted() {
    try {
      this.events = await loadEvents();
    } catch (error) {
      console.error('Error loading events:', error);
    }

    onAuthStateChanged(auth, async (user) => {
      this.currentUser = user;
      if (user) await this.loadFavourites();
      else this.favourites = [];
    });

    this.updateItemsPerView();
    window.addEventListener('resize', this.updateItemsPerView);
    this.startAutoScroll();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerView);
    this.stopAutoScroll();
  },

  computed: {
    displayEvents() {
      return this.events.filter(e => e.featured === true);
    },
    endIndex() {
      return Math.max(0, this.displayEvents.length - this.itemsPerView);
    }
  },

  methods: {
    async loadFavourites() {
      if (!this.currentUser) return;
      try {
        const userDoc = await getDoc(doc(db, 'users', this.currentUser.uid));
        if (userDoc.exists()) {
          const favouritesList = userDoc.data().favouritesList || [];
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
          const userDoc = await getDoc(userRef);
          const currentFavourites = userDoc.data().favouritesList || [];
          const updatedFavourites = currentFavourites.filter(fav => fav.id !== eventId);
          await updateDoc(userRef, { favouritesList: updatedFavourites });
          this.favourites = this.favourites.filter(id => id !== eventId);
        } else {
          await updateDoc(userRef, { favouritesList: arrayUnion(this.selectedEvent) });
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

    startAutoScroll() {
      // Prevent multiple intervals from stacking
      this.stopAutoScroll();

      this.autoScrollInterval = setInterval(() => {
        if (this.currentIndex >= this.endIndex) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
      }, this.autoScrollDelay);
    },

    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
        this.autoScrollInterval = null;
      }
    },

    updateItemsPerView() {
      const width = window.innerWidth;
      if (width < 768) this.itemsPerView = 1;
      else if (width < 992) this.itemsPerView = 2;
      else this.itemsPerView = 3;

      if (this.currentIndex > this.endIndex) {
        this.currentIndex = Math.max(0, this.endIndex);
      }
    },

    scrollPrev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.stopAutoScroll();
        this.startAutoScroll();
      }
    },

    scrollNext() {
      if (this.currentIndex < this.endIndex) {
        this.currentIndex++;
        this.stopAutoScroll();
        this.startAutoScroll();
      }
    },

    openModal(event) {
      this.selectedEvent = event;
      this.showModal = true;
      this.stopAutoScroll();
    },

    closeModal() {
      this.showModal = false;
      this.selectedEvent = null;
      this.startAutoScroll();
    }
  },
  watch: {
    displayEvents() {
      if (this.currentIndex > this.endIndex) this.currentIndex = 0;
    }
  }

};
</script>

<style scoped>
.section-title {
  margin: 0 0 12px 0;
  font-size: 22px;
  font-weight: 800;
  color: #1f2937;
  padding-left: 0.5rem;
}

.cursor-pointer:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Responsive carousel item widths */
.carousel-item-wrapper {
  width: 100%;
}

@media (min-width: 768px) {
  .carousel-item-wrapper {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .carousel-item-wrapper {
    width: 33.333%;
  }
}

.modal-tags {
  display: flex;
  gap: 8px;
  margin: 20px;
  flex-wrap: wrap;
}

.tag {
  background: #f3f4f6;
  color: #374151;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}
</style>