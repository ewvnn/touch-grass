<template>
  
  <!-- Section header -->
  <section class="mb-12">
    <div class="d-flex align-items-center justify-content-between mb-3 mb-md-4">
      <h2 class="h4 fw-bold text-dark m-0">Popular This Week</h2>
      <a href="#" class="text-success d-inline-flex align-items-center fw-semibold">
        View all
        <svg class="ms-1" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <!-- Carousel rail (scroll-snap, keyboard & wheel friendly) -->
    <div class="position-relative">
      <!-- Left / right controls -->
      <button class="btn btn-light border position-absolute top-50 start-0 translate-middle-y rounded-circle shadow-sm d-none d-md-inline-flex"
              type="button" aria-label="Previous" @click="scrollBy(-1)">
        ‹
      </button>
      <button class="btn btn-light border position-absolute top-50 end-0 translate-middle-y rounded-circle shadow-sm d-none d-md-inline-flex"
              type="button" aria-label="Next" @click="scrollBy(1)">
        ›
      </button>

      <!-- The horizontal list -->
      <div ref="rail"
           class="tg-rail d-flex gap-3 overflow-auto pb-2"
           @keydown.right.prevent="scrollBy(1)"
           @keydown.left.prevent="scrollBy(-1)"
           tabindex="0" aria-roledescription="carousel">
        <!-- Cards -->
        <article v-for="event in popularEvents" :key="event.id"
                 class="card border-0 shadow-sm rounded-4 overflow-hidden tg-item flex-shrink-0"
                 role="group" :aria-label="event.title" style="width:min(80vw, 280px); cursor:pointer"
                 @click="openModal(event)">
          <div class="position-relative overflow-hidden" style="height: 200px;">
            <img :src="event.image" :alt="event.title" class="w-100 h-100 object-fit-cover tg-zoom" loading="lazy" />
            <div class="position-absolute top-0 start-0 w-100 h-100"
                 style="background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.35) 100%)"></div>
            <div class="position-absolute top-2 end-2">
              <span class="badge bg-success-subtle text-success-emphasis rounded-pill px-3 py-2 fw-semibold">
                {{ event.price }}
              </span>
            </div>
            <div class="position-absolute bottom-2 start-2 d-flex gap-2 flex-wrap">
              <span v-if="event.badge" class="badge bg-dark text-white rounded-pill px-2 py-1">{{ event.badge }}</span>
              <span class="badge bg-light text-dark rounded-pill px-2 py-1">{{ event.category }}</span>
            </div>
          </div>

          <div class="card-body p-3">
            <h3 class="h6 fw-bold mb-1 text-truncate" :title="event.title">{{ event.title }}</h3>

            <div class="small text-secondary d-flex align-items-center mb-1">
              <svg class="me-1" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="text-truncate" :title="event.location">{{ event.location }}</span>
            </div>

            <div class="small text-secondary d-flex align-items-center">
              <svg class="me-1" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span>{{ event.date }}</span>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <button class="btn btn-sm btn-outline-success rounded-pill px-3 fw-semibold"
                      @click.stop="toggleSaveEvent(event)">
                <span class="d-inline-flex align-items-center">
                  <svg v-if="!isEventSaved(event)" class="me-1" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else class="me-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/>
                  </svg>
                  {{ isEventSaved(event) ? 'Saved' : 'Save' }}
                </span>
              </button>
              <span class="small text-muted">{{ event.duration }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Small screen paging dots -->
      <div class="d-flex justify-content-center gap-1 mt-2 d-md-none">
        <span v-for="(_, i) in popularEvents" :key="i"
              class="rounded-circle" :style="dotStyle(i)"></span>
      </div>
    </div>
  </section>

  <!-- Details Modal -->
  <div v-if="selectedEvent" class="modal-backdrop show" @click.self="closeModal">
    <div class="tg-modal card border-0 shadow-lg rounded-4 overflow-hidden">
      <div class="position-relative">
        <img :src="selectedEvent.image" :alt="selectedEvent.title" class="w-100 object-fit-cover" style="height:260px">
        <button class="btn btn-light position-absolute top-2 end-2 rounded-circle" @click="closeModal" aria-label="Close">✕</button>
      </div>
      <div class="card-body p-4">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h2 class="h5 fw-bold mb-1">{{ selectedEvent.title }}</h2>
            <div class="text-success fw-semibold">{{ selectedEvent.price }}</div>
          </div>
          <button class="btn btn-outline-success rounded-pill" @click="toggleSaveEvent(selectedEvent)">
            {{ isEventSaved(selectedEvent) ? 'Saved' : 'Save Event' }}
          </button>
        </div>

        <div class="row g-3 mb-3">
          <div class="col-12 col-md-4 d-flex">
            <div class="bg-success-subtle rounded-3 p-2 me-2">📅</div>
            <div>
              <div class="text-secondary small">Date & Time</div>
              <div>{{ selectedEvent.date }}</div>
              <div v-if="selectedEvent.time">{{ selectedEvent.time }}</div>
            </div>
          </div>
          <div class="col-12 col-md-4 d-flex">
            <div class="bg-success-subtle rounded-3 p-2 me-2">📍</div>
            <div>
              <div class="text-secondary small">Location</div>
              <div>{{ selectedEvent.location }}</div>
            </div>
          </div>
          <div class="col-12 col-md-4 d-flex">
            <div class="bg-success-subtle rounded-3 p-2 me-2">🏷</div>
            <div>
              <div class="text-secondary small">Category</div>
              <div>{{ selectedEvent.category }}</div>
            </div>
          </div>
        </div>

        <h3 class="h6 fw-bold">About this event</h3>
        <p class="mb-4">{{ selectedEvent.description }}</p>

        <div class="d-flex align-items-center">
          <div class="rounded-circle overflow-hidden me-3" style="width:40px;height:40px;background:#eee">
            <img v-if="selectedEvent.organizerImage" :src="selectedEvent.organizerImage" class="w-100 h-100 object-fit-cover" />
          </div>
          <div>
            <div class="fw-semibold">{{ selectedEvent.organizer }}</div>
            <div class="small text-secondary">{{ selectedEvent.organizerType }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State: loaded events + saved IDs + modal
const popularEvents = ref([])
const savedIds = ref(new Set())
const selectedEvent = ref(null)

// Refs for the rail and item width calc
const rail = ref(null)

// Load hardcoded data from /src/data/events.json
onMounted(async () => {
  const res = await fetch('src/data/events.json')
  popularEvents.value = await res.json()
})

// Scroll the rail by one card (direction: -1 left, 1 right)
function scrollBy(dir) {
  const el = rail.value
  if (!el) return
  const item = el.querySelector('.tg-item')
  const delta = item ? item.getBoundingClientRect().width + 12 : 280 // 12 ≈ gap
  el.scrollBy({ left: dir * delta, behavior: 'smooth' })
}

// Save/unsave helpers
function isEventSaved (event) { return savedIds.value.has(event.id) }
function toggleSaveEvent (event) {
  const copy = new Set(savedIds.value)
  copy.has(event.id) ? copy.delete(event.id) : copy.add(event.id)
  savedIds.value = copy
}

// Modal controls
function openModal (event) { selectedEvent.value = event }
function closeModal () { selectedEvent.value = null }

// Simple dot indicator styling (active based on scroll position)
function dotStyle(index) {
  // Compute approx current index from scrollLeft
  const el = rail.value
  if (!el) return baseDot(false)
  const item = el.querySelector('.tg-item')
  const w = item ? item.getBoundingClientRect().width + 12 : 1
  const current = Math.round(el.scrollLeft / w)
  return baseDot(current === index)
}

function baseDot(active) {
  return {
    width: '8px',
    height: '8px',
    background: active ? '#198754' : '#e9ecef',
    display: 'inline-block'
  }
}

// expose for template (optional in <script setup>, but kept for clarity)
</script>


<style scoped>
/* Backdrop layer */
.modal-backdrop.show {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6); /* translucent black background */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1050;
}

/* Ensure no opacity leaks to child elements */
.modal-backdrop.show * {
  opacity: 1 !important;
}

/* Modal container itself — fully opaque */
.tg-modal {
  background-color: #fff;           /* solid white panel */
  border-radius: 1rem;
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.35);
  color: #212529;
  width: min(920px, 96vw);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  z-index: 1060;
  opacity: 1 !important;            /* force full opacity */
  transform: translateY(0);
}

/* Image section solid and separate from backdrop */
.tg-modal img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  background-color: #fff;
}

/* Close button styling */
.tg-modal button[aria-label="Close"] {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.2rem;
  line-height: 1;
}
.tg-modal-wrapper {
  position: relative;
  z-index: 1060;
}
</style>