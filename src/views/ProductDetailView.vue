<script setup lang="ts">
import ProductDetailComponent from '@/components/ProductDetailComponent.vue'
import ProductImageComponent from '@/components/ProductImageComponent.vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/shop/state_mgr'
import { onMounted, type Ref, ref } from 'vue'
import { Product } from '@/models/product'
import router from '@/utils/router'
import type { CategoryItem } from '@/models/category'
import MenuItemComponent from '@/components/MenuItemComponent.vue'

const route = useRoute()
const product_id = route.params.productId as string

const pro_st = useProductStore().products
const cate_st = useProductStore().categories
const product: Ref<Product | undefined> = ref(undefined)
const category: Ref<CategoryItem | undefined> = ref(undefined)

onMounted(async () => {
  const items = await pro_st.load_or_init()
  const categories = await cate_st.load_or_init()
  product.value = items.getProducts().find((p) => p.id.toString() === product_id)
  for (let i = 0; i < categories.get_categories().length; i++) {
    console.log(`Category ${categories.get_categories()[i]?.id}`)
    if (categories.get_categories()[i]?.id === product.value?.categoryId) {
      category.value = categories.get_categories()[i]
      break
    }
  }
  console.log('Category id : ' + product?.value?.categoryId)
})

async function back_home() {
  await router.push('/')
}

async function go_to_category() {
  await router.push(`/categories/${category.value?.id}`)
}
</script>

<template>
  <div class="cate-path">
    <p @click="back_home" class="path-ele">Home</p>
    <p class="sep">></p>
    <p class="path-ele" @click="go_to_category">{{ category?.name ?? 'Loading...' }}</p>
    <p class="sep">></p>
    <p class="path-ele">{{ product?.name ?? 'Loading...' }}</p>
  </div>
  <div class="product-view">
    <ProductImageComponent class="flex-item" :product="product ?? Product.error" />
    <ProductDetailComponent :product="product" :category="category" class="flex-item" />
  </div>
  <div class="product-comments">
    <div class="buttons-container">
      <MenuItemComponent
        class="button-info button-info-active"
        :border="'1px solid lightgray'"
        :border_radius="'15px'"
        label="Description"
      ></MenuItemComponent>
      <MenuItemComponent
        class="button-info"
        :border="'1px solid lightgray'"
        :border_radius="'15px'"
        label="Additional Info"
      ></MenuItemComponent>
      <MenuItemComponent
        class="button-info"
        :border="'1px solid lightgray'"
        :border_radius="'15px'"
        label="Reviews"
      ></MenuItemComponent>
    </div>
    <p class="description-text">
      Database Design Process:<br />
      1. Requirements Analysis: Gather and analyze user and application data needs.<br />
      2. Conceptual Design: Create an abstract model (often using ER diagrams) to identify entities,
      relationships, and attributes.<br />
      3. Logical Design: Map the conceptual model to a logical schema (tables, keys,
      relationships).<br />
    </p>
  </div>
</template>

<style scoped>
.product-view {
  display: flex;
}

.flex-item {
  flex: 1;
}

.cate-path {
  margin: 10px 0;
  display: flex;
  gap: 10px;
  font-size: 1.1rem;
}

.path-ele,
.sep {
  cursor: pointer;
  color: #868686;
  transition: color 0.3s;
}

.sep {
  cursor: default;
}

.path-ele:hover {
  color: black;
  font-weight: bold;
}

.product-comments {
  padding: 3% 5%;
  margin-top: 10px;
  border: 1px solid #b2acac;
  border-radius: 10px;
}

.buttons-container {
  display: flex;
  gap: 20px;
}
.button-info {
  padding: 5px 20px;
}
.button-info-active {
  box-shadow: 0 0 10px #b2abab;
}
.description-text {
  padding-top: 20px;
  color: black;
}
</style>
