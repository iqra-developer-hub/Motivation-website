
import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Quotes from '../pages/Quotes.vue'
import Tips from '../pages/Tips.vue'
import Stories from '../pages/Stories.vue'
import About from '../pages/About.vue'

import PrivacyPolicy from '../pages/Privacy-policy.vue'
import Term from '../pages/Term.vue'
import CookiePolicy from '../pages/Cookie-policy.vue'
import Suggest from '../pages/Suggest.vue'
import Support from '../pages/Support.vue'
import Contact from '../pages/Contact.vue'
import Submit from '../pages/Submit.vue'
import TodayQuotes from '../pages/TodayQuotes.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quotes', component: Quotes },
  { path: '/tips', component: Tips },
  { path: '/stories', component: Stories },
  { path: '/about', component: About },

  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/term', component: Term },
  { path: '/cookie-policy', component: CookiePolicy },
  { path: '/suggest', component: Suggest },
  { path: '/submit', component: Submit },
  { path: '/support', component: Support },
  { path: '/contact', component: Contact },
  { path: '/todayQuotes',component: TodayQuotes}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router