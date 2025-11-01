<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { signOutUser } from '@/services/auth'
import { toast } from '@/lib/toast'

const router = useRouter()

// Local auth state
const user = ref(auth.currentUser)
let unsub
onMounted(() => { unsub = onAuthStateChanged(auth, u => (user.value = u)) })
onBeforeUnmount(() => { unsub && unsub() })

const displayName = computed(
  () => user.value?.displayName || user.value?.email || ''
)

function closeMobile() {
  const el = document.getElementById('tgNav')
  if (window.bootstrap?.Collapse) new window.bootstrap.Collapse(el, { toggle: true })
  else el?.classList.remove('show')
}

async function handleSignOut() {
  await signOutUser()
  toast.success('Signed out')
  closeMobile()
  router.push('/')
}

function goProfile() {
  closeMobile()
  router.push('/profile')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-touchgrass" aria-label="Touch Grass main navigation">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/" @click="closeMobile">
        <svg class="grass-logo" viewBox="0 0 64 64" role="img" aria-label="Touch Grass logo">
          <rect x="0" y="44" width="64" height="6" fill="white" />
          <path d="M8 44 q2-10 6-16 q-2 8 2 16 Z" fill="white" />
          <path d="M16 44 q2-12 8-20 q-3 10 1 20 Z" fill="white" />
          <path d="M24 44 q3-14 10-24 q-4 12 0 24 Z" fill="white" />
          <path d="M32 44 q2-12 8-20 q-3 10 0 20 Z" fill="white" />
          <path d="M40 44 q3-14 10-24 q-4 12 0 24 Z" fill="white" />
          <path d="M48 44 q2-10 6-16 q-2 8 2 16 Z" fill="white" />
        </svg>
        <span>Touch Grass</span>
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tgNav"
        aria-controls="tgNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="tgNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item">
            <RouterLink class="nav-link d-flex align-items-center gap-2" to="/calendar" @click="closeMobile">
              <i class="bi bi-calendar fs-5"></i>
              <span class="d-inline d-lg-none d-xl-inline">Calendar</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link d-flex align-items-center gap-2" to="/itinerary" @click="closeMobile">
              <i class="bi bi-signpost-2 fs-5"></i>
              <span class="d-inline d-lg-none d-xl-inline">Itinerary</span>
            </RouterLink>
          </li>

          <!-- Guest -->
          <li class="nav-item" v-if="!user">
            <RouterLink class="nav-link d-flex align-items-center gap-2" to="/login" @click="closeMobile">
              <i class="bi bi-person-circle fs-5"></i>
              <span class="d-inline d-lg-none d-xl-inline">Login</span>
            </RouterLink>
          </li>

          <!-- Authed -->
          <li class="nav-item dropdown" v-else>
            <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle fs-5"></i>
              <span class="d-inline d-lg-none d-xl-inline">{{ displayName }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" @click="goProfile">Profile</button></li>
              <li><button class="dropdown-item" @click="handleSignOut">Sign out</button></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
:root {
  --tg-primary: #7bd47b;
  --tg-secondary: #206d25;
  --tg-text: white;
}

.navbar-touchgrass {
  background-color: var(--tg-secondary);
  border-bottom: 1px solid rgba(15, 23, 42, .06);
}

.navbar-touchgrass .navbar-brand {
  font-weight: 700;
  color: var(--tg-text);
  letter-spacing: .2px;
}

.navbar-touchgrass .nav-link {
  color: var(--tg-text);
  border-radius: .75rem;
  padding: .5rem .6rem;
}

.navbar-touchgrass .nav-link:hover,
.navbar-touchgrass .nav-link:focus {
  background-color: rgba(182, 250, 188, .35);
  color: var(--tg-text);
}

.grass-logo {
  width: 28px;
  height: 28px;
}

.dropdown-item:active {
  background-color: #206d25;
}
</style>
