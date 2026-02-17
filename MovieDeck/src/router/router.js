import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})
export default router