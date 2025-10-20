import { createWebHistory, createRouter } from 'vue-router'
const Index = () => import('@/pages/Index.vue')
const Auth = () => import('@/pages/Auth.vue')
const Calendar = () => import('@/pages/Calendar.vue')
const Itinerary = () => import('@/pages/Itinerary.vue')

import { waitForAuthInit } from '@/services/auth.js'
import { auth } from '@/lib/firebase'

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Auth, meta: { guestOnly: true, hideChrome: true } },
  { path: '/calendar', component: Calendar, meta: { requiresAuth: true } },
  { path: '/itinerary', component: Itinerary, meta: { requiresAuth: true } },
]

const router = createRouter({ history: createWebHistory(), routes })

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
