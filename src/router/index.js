import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutMe from '../views/AboutMe.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import BlogPage from '../views/BlogPage.vue'
import ToolsPage from '../views/ToolsPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMe
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage
  },
  {
    path: '/tools',
    name: 'tools',
    component: ToolsPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
