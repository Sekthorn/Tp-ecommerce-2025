import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CategoryComponent from "@/components/CategoryComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import PromotionComponent from "@/components/PromotionComponent.vue";
import {createPinia} from "pinia";
import MenuComponent from "@/components/MenuComponent.vue";


// export const productStore = defineSt


createApp(App)
  .use(createPinia())
  .component("CategoryComponent",CategoryComponent)
  .component("PromotionComponent",PromotionComponent)
  .component("ButtonComponent",ButtonComponent)
  .component("MenuConponent",MenuComponent)
  .mount('#app')

