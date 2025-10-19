import {
  createWebHistory,
  createRouter
} from "vue-router";
import Index from '@/pages/Index.vue'
import Auth from '@/pages/Auth.vue'
import Calendar from '@/pages/Calendar.vue'
import Itinerary from '@/pages/Itinerary.vue'
import { waitForAuthInit } from '../services/auth'
import { auth } from '../lib/firebase'

const routes = [
  { path: '/', component: Index},         // Landing page
  { path: '/login', component: Auth, meta: { guestOnly: true, hideChrome: true } },
  { path: '/calendar', component: Calendar, meta: { requiresAuth: true } }, // Calendar page
  { path: '/itinerary', component: Itinerary, meta: { requiresAuth: true } }, // itinerary page
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const user = auth.currentUser ?? (await waitForAuthInit())

  if (to.meta?.requiresAuth && !user) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
  if (to.meta?.guestOnly && user) {
    return { path: to.query.redirect?.toString() || '/' }
  }
})

export default router