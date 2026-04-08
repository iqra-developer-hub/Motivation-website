import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Quotes from '../pages/Quotes.vue'
import Tips from '../pages/Tips.vue'
import Stories from '../pages/Stories.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quotes', component: Quotes },
  { path: '/tips', component: Tips },
  { path: '/stories', component: Stories },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router