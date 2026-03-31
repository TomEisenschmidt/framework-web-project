import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavorisView from '@/views/FavorisView.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/film/:id', name: 'FilmDetail', component: () => import('../views/FilmDetailView.vue')},
    {path: '/favoris', name: 'favoris', component: FavorisView},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})
export default router