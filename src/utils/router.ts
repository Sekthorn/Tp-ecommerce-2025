import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import CategoryPageView from '@/views/CategoryPageView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: CategoryPageView,
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: ProductDetailView,
    },
  ],
})
export default router
