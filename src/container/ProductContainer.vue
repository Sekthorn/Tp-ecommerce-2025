<script setup lang="ts">
import { useProductStore } from '../shop/state_mgr'
import { onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const products_state = useProductStore().products
onMounted(async () => {
  await products_state.load_or_init()
})
</script>
<template>
  <div class="product-container">
    <ProductCard
      v-for="product in products_state.getProducts()"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.product-container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  gap: 1.2rem 0.5rem;
}
</style>
