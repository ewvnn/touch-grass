<template>
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

    <!-- Render only after client mount to avoid setup-time errors -->
    <Swiper
      v-if="isClient"
      :modules="modules"
      :slides-per-view="1.1"
      :space-between="16"
      :navigation="true"
      :a11y="{ enabled: true }"
      :breakpoints="{
        576: { slidesPerView: 1.5, spaceBetween: 16 },
        768: { slidesPerView: 2.2, spaceBetween: 18 },
        992: { slidesPerView: 3.2, spaceBetween: 20 },
        1200:{ slidesPerView: 4.1, spaceBetween: 22 }
      }"
      class="position-relative"
    >
      <SwiperSlide v-for="event in popularEvents" :key="event.id">
        <article
          class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden"
          @click="openModal(event)"
          style="cursor:pointer"
        >
          <div class="position-relative overflow-hidden" style="height: 200px;">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-100 h-100 object-fit-cover"
              loading="lazy"
            />
            <div class="position-absolute top-0 start-0 w-100 h-100"
                 style="background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.35) 100%);">
            </div>

            <div class="position-absolute top-2 end-2">
              <span class="badge bg-success-subtle text-success-emphasis rounded-pill px-3 py-2 fw-semibold">
                {{ event.price }}
              </span>
            </div>

            <div class="position-absolute bottom-2 start-2 d-flex gap-2 flex-wrap">
              <span v-if="event.badge" class="badge bg-dark text-white rounded-pill px-2 py-1">
                {{ event.badge }}
              </span>
              <span class="badge bg-light text-dark rounded-pill px-2 py-1">
                {{ event.category }}
              </span>
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
              <button
                class="btn btn-sm btn-outline-success rounded-pill px-3 fw-semibold"
                @click.stop="toggleSaveEvent(event)"
              >
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
      </SwiperSlide>

      <div class="swiper-button-next text-success"></div>
      <div class="swiper-button-prev text-success"></div>
    </Swiper>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, A11y]
const isClient = ref(false)
onMounted(() => { isClient.value = true })

const popularEvents = ref([
  { id: 1, title: 'Sunset Yoga at Marina Barrage', location: 'Marina Barrage, Singapore', date: 'Sat, 18 Oct • 6:00 PM', duration: '90 mins', price: 'Free', badge: 'Outdoor', category: 'Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200' },
  { id: 2, title: 'Haji Lane Indie Market', location: 'Haji Lane', date: 'Sun, 19 Oct • 12:00 PM', duration: 'All afternoon', price: '$5', badge: 'Pop-up', category: 'Market', image: 'https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1200' },
  { id: 3, title: 'DIY Terrarium Workshop', location: 'Bugis Street', date: 'Fri, 24 Oct • 7:30 PM', duration: '2 hrs', price: '$9', badge: 'Hands-on', category: 'Workshop', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200' },
  { id: 4, title: 'Botanic Gardens Photo Walk', location: 'Singapore Botanic Gardens', date: 'Sun, 26 Oct • 8:00 AM', duration: '2 hrs', price: 'Free', badge: 'Nature', category: 'Photography', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200' },
  { id: 5, title: 'Esplanade Open Jams', location: 'Esplanade Outdoor Theatre', date: 'Fri, 24 Oct • 8:00 PM', duration: '90 mins', price: 'Free', badge: 'Live', category: 'Music', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200' },
  { id: 6, title: 'Beginner Salsa Night', location: 'Clarke Quay', date: 'Wed, 22 Oct • 7:00 PM', duration: '2 hrs', price: '$8', badge: 'Dance', category: 'Social', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200' },
  { id: 7, title: 'Thrift Flip Meetup', location: 'Queensway Shopping Centre', date: 'Sat, 25 Oct • 2:00 PM', duration: '2 hrs', price: '$6', badge: 'Sustainable', category: 'Community', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200' },
  { id: 8, title: 'Bayfront Park Run (5K)', location: 'Bayfront Avenue', date: 'Sun, 19 Oct • 7:00 AM', duration: '45–60 mins', price: 'Free', badge: 'Fitness', category: 'Running', image: 'https://images.unsplash.com/photo-1520975867597-0f44c2b6e0f4?q=80&w=1200' },
  { id: 9, title: 'Board Games & Brew', location: 'Bras Basah', date: 'Thu, 23 Oct • 7:00 PM', duration: '3 hrs', price: '$10', badge: 'Indoor', category: 'Games', image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1200' },
  { id: 10, title: 'Intro to Urban Sketching', location: 'Tiong Bahru', date: 'Sat, 18 Oct • 4:00 PM', duration: '2 hrs', price: '$7', badge: 'Art', category: 'Workshop', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200' },
  { id: 11, title: 'Kampong Glam Night Walk', location: 'Kampong Glam', date: 'Fri, 24 Oct • 8:30 PM', duration: '90 mins', price: 'Free', badge: 'Culture', category: 'Guided Walk', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200' },
  { id: 12, title: 'Beginner Coding: JS Taster', location: 'SMU Labs', date: 'Tue, 21 Oct • 7:00 PM', duration: '2 hrs', price: '$9', badge: 'Tech', category: 'Class', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200' }
])

const savedIds = ref(new Set())
function isEventSaved (event) { return savedIds.value.has(event.id) }
function toggleSaveEvent (event) {
  const set = new Set(savedIds.value)
  set.has(event.id) ? set.delete(event.id) : set.add(event.id)
  savedIds.value = set
}

const emit = defineEmits(['open'])
function openModal (event) { emit('open', event) }
</script>

<style scoped>
article:hover img { transform: scale(1.05); transition: transform .35s ease; }
:deep(.swiper-button-next),
:deep(.swiper-button-prev) { width: 38px; height: 38px; background: rgba(25,135,84,.1); border-radius: 50%; }
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) { font-size: 16px; color: #198754; }
</style>