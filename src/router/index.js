import {
    createWebHistory,
    createRouter
} from "vue-router";
import Index from '/src/pages/Index.vue'
import Calendar from '/src/pages/Calendar.vue'
import Itinerary from '/src/pages/Itinerary.vue';

const routes = [
  { path: '/', component: Index },         // Landing page
  { path: '/calendar', component: Calendar }, // Calendar page
  { path: '/itinerary', component: Itinerary} // itinerary page
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router