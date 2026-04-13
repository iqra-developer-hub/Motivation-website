import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Quotes from '../pages/Quotes.vue'
import Tips from '../pages/Tips.vue'
import Stories from '../pages/Stories.vue'
import About from '../pages/About.vue'
import Privacy-policy from '../pages/Privacy-policy.vue'
import Term from '../pages/Term.vue'
import Cookie-policy from '../pages/Cookie-policy.vue'
import Suggest from '../pages/Suggest.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quotes', component: Quotes },
  { path: '/tips', component: Tips },
  { path: '/stories', component: Stories },
  { path: '/about', component: About },

 
   { path: '/privacy-policy', name: Privacy-policy },
  { path: '/term', name: Term },
  { path: '/cookie-policy', name:Cookie-policy  },
  { path: '/suggest', name:Suggest},
  { path: '/submit', name:Submit},
  { path: '/support', name:Support},
  { path: '/contact', name:Contact},
]  

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router