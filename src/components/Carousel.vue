<template>
  <div class="container py-5" id="events">
    <h2 class="section-title">Featured Events</h2>
    <!-- Carousel Container -->
    <div class="position-relative overflow-hidden" style="margin: 30px auto" @mouseenter="stopAutoScroll"
      @mouseleave="startAutoScroll">

      <!-- Previous Button -->
      <button class="btn btn-light nav-btn start" @click="scrollPrev" :disabled="currentIndex === 0"
        aria-label="Previous">
        <span aria-hidden="true">&lsaquo;</span>
      </button>

      <!-- Carousel Items -->
      <div class="overflow-hidden">
        <div class="d-flex transition-transform"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
          style="transition: transform 0.3s ease;">
          <div v-for="event in displayEvents" :key="event.id" class="flex-shrink-0 px-2 carousel-item-wrapper">
            <div class="card h-100 shadow-sm cursor-pointer" @click="openModal(event)">
              <div class="img-wrap">
                <img :src="event.image" class="card-img-top" :alt="event.title" />
              </div>
              <div class="card-body">
                <div class="modal-tags mb-2">
                  <EventChip v-for="chip in chipsForPrimary(event)" :key="chip.kind + '-' + chip.label"
                    :label="chip.label" :kind="chip.kind" dense />
                </div>
                <h5 class="card-title mb-2">{{ event.title }}</h5>
                <p class="card-text text-muted mb-1">
                  <small>{{ event.location }}</small>
                </p>
                <p class="card-text text-muted mb-1">
                  <small>{{ event.date }}</small>
                </p>
                <p class="card-text text-muted mb-1">
                  <small>{{ event.duration }}</small>
                </p>
                <div class="price-row" aria-label="Price and benefits">
                  <p class="card-text price mb-0">{{ event.displayPriceText }}</p>
                  <div class="benefit-chips">
                    <EventChip v-for="chip in chipsForBenefits(event)" :key="chip.kind + '-' + chip.label"
                      :label="chip.label" :kind="chip.kind" dense />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Button -->
        <button class="btn btn-light nav-btn end" @click="scrollNext" :disabled="currentIndex >= endIndex"
          aria-label="Next">
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" :class="{ show: showModal, 'd-block': showModal }" tabindex="-1"
      style="background-color: rgba(0,0,0,0.5);" @click.self="closeModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" v-if="selectedEvent">
          <div class="modal-header justify-content-between align-items-center">
            <h5 class="modal-title mb-0">{{ selectedEvent.title }}</h5>
            <div class="d-flex align-items-center gap-2">
              <button v-if="selectedEvent" class="btn p-0 fav-btn" :aria-pressed="isFavourite(selectedEvent.id)"
                :title="isFavourite(selectedEvent.id) ? 'Remove from favourites' : 'Save to favourites'"
                :disabled="savingFavourite" @click.stop="toggleFavourite">
                <i :class="['bi', isFavourite(selectedEvent.id) ? 'bi-heart-fill' : 'bi-heart']"></i>
              </button>

              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
          </div>
          <div class="modal-body">
            <!-- Fixed-size modal image -->
            <img :src="selectedEvent.image" class="img-fluid rounded mb-3" :alt="selectedEvent.title"
              style="width: 100%; height: 300px; object-fit: cover;" />
            <div class="mb-2 modal-tags">
              <EventChip v-for="chip in chipsForPrimary(selectedEvent)" :key="chip.kind + '-' + chip.label"
                :label="chip.label" :kind="chip.kind" />
            </div>
            <p class="mb-2"><strong>Location:</strong> {{ selectedEvent.location }}</p>
            <p class="mb-2"><strong>Date:</strong> {{ selectedEvent.date }}</p>

            <p class="mb-2"><strong>Time:</strong> {{ selectedEvent.duration }}</p>
            <div class="price-row mb-2" aria-label="Price and benefits">
              <p class="mb-0">
                <strong>Price: </strong>
                <span class="price">{{ selectedEvent.displayPriceText }}</span>
              </p>
              <div class="benefit-chips">
                <EventChip v-for="chip in chipsForBenefits(selectedEvent)" :key="chip.kind + '-' + chip.label"
                  :label="chip.label" :kind="chip.kind" />
              </div>
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
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import EventChip from '@/components/EventChip.vue'
import { canonicalTagLabel } from "@/lib/tagColors";

export default {
  name: 'EventCarousel',
  components: { EventChip },
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
    normalised() {
      const isFree = (price) => {
        if (price == null) return false
        const s = String(price).toLowerCase()
        return s.includes('free') || parseFloat(s.replace(/[^0-9.]/g, '')) === 0
      }
      return (this.events || []).map(e => {
        const free = isFree(e.price)
        return {
          ...e,
          isFree: free,
          displayPriceText: free ? 'Free' : String(e.price || '')
        }
      })
    },
    displayEvents() {
      return this.normalised.filter(e => e.featured === true);
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
        this.closeModal?.();
        const redirect = this.$route?.fullPath || '/';
        if (this.$router) {
          await this.$router.push({ path: '/login', query: { redirect } });
        } else {
          window.location.href = `/login?redirect=${encodeURIComponent(redirect)}`;
        }
        return;
      }

      const eventId = this.selectedEvent.id;
      const userRef = doc(db, 'users', this.currentUser.uid);
      this.savingFavourite = true;

      try {
        const existing = await getDoc(userRef);
        if (!existing.exists()) {
          await setDoc(userRef, { favouritesList: [] }, { merge: true });
        }

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

    toggleFavouriteFromCard(event) {
      this.selectedEvent = event;
      this.toggleFavourite();
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
      document.body.style.overflow = 'hidden';
      this.stopAutoScroll();
    },

    closeModal() {
      this.showModal = false;
      this.selectedEvent = null;
      document.body.style.overflow = 'auto';
      this.startAutoScroll();
    },

    chipsForPrimary(evt) {
      if (!evt) return [];
      const chips = [];
      if (evt.badge) chips.push({ label: evt.badge, kind: 'badge' }); // e.g., Dance, Sustainable (colour-coded)
      if (evt.category) chips.push({ label: evt.category, kind: 'tag' }); // e.g., Workshop, Music
      return chips;
    },
    chipsForBenefits(evt) {
      if (!evt) return [];
      const chips = [];
      if (evt.cdc) chips.push({ label: canonicalTagLabel('CDC Vouchers'), kind: 'tag' });
      if (evt.culturepass) chips.push({ label: canonicalTagLabel('Culture Pass'), kind: 'tag' });
      return chips;
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

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
}

.nav-btn.start {
  left: 0;
}

.nav-btn.end {
  right: 0;
}

.img-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
}

.fav-btn {
  border: none;
  background: transparent;
  padding: 6px;
  line-height: 1;
  cursor: pointer;
  border-radius: 9999px;
  color: #085702;
  /* margin-bottom: 10px; */
}

.fav-btn i {
  font-size: 22px;
}

.fav-btn:hover {
  background: #f3f4f6;
}

.fav-btn:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.modal-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.modal-dialog {
  max-width: 640px;
  margin: 20px auto;
}

.modal-content {
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-body {
  overflow-y: auto;
  overscroll-behavior: contain;
}

.price {
  font-weight: 700;
  color: #10b981;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.benefit-chips {
  display: flex;
  gap: 6px;
}

.cursor-pointer {
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
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
</style>