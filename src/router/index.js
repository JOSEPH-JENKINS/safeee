import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import Upload from '../views/Upload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nft/:name',
    name: 'Page',
    component: Page
  },
  {
    path: '/upload-project',
    name: 'Upload',
    component: Upload
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
