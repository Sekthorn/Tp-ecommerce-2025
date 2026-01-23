import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CategoryComponent from '@/components/CategoryComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import PromotionComponent from '@/components/PromotionComponent.vue'
import { createPinia } from 'pinia'
import MenuComponent from '@/components/MenuComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SearchBoxComponent from '@/components/SearchBoxComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import router from '@/utils/router'

createApp(App)
  .use(createPinia())
  .component('CategoryComponent', CategoryComponent)
  .component('PromotionComponent', PromotionComponent)
  .component('ButtonComponent', ButtonComponent)
  .component('MenuComponent', MenuComponent)
  .component('HeaderComponent', HeaderComponent)
  .component('SearchBoxComponent', SearchBoxComponent)
  .component('ProductCard', ProductCardComponent)
  .use(router)
  .mount('#app')
