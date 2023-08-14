import { createRouter, createWebHistory } from 'vue-router'
import CharactersPage from '../views/CharactersPage.vue'
import EpisodePage from '../views/EpisodePage.vue'
import LocationPage from '../views/LocationPage.vue'

const routes = [
  { path: '/', component: CharactersPage },
  { path: '/locations', component: LocationPage },
  { path: '/episodes', component: EpisodePage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
