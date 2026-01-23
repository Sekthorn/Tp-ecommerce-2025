<script setup lang="ts">
import { Product } from '@/models/product'
import { EndPoint } from '@/utils/end_point'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="image-container">
    <div class="selected-image">
      <img :src="`${EndPoint.image_url(product.singleImg)}`" alt="Product Image" />
    </div>
    <div class="image-selector">
      <img
        v-for="(img, index) in product.imgs_or_init"
        :key="index"
        :src="`${EndPoint.image_url(img)}`"
        alt="Image Selector Items"
      />
    </div>
  </div>
</template>

<style scoped>
.selected-image {
  margin-bottom: 10px;
  border: 1px solid #939090;
  border-radius: 5px;
}
.selected-image img {
  width: 100%;
  object-fit: contain;
}
.image-container {
  display: flex;
  flex-direction: column;
}

.image-selector {
  display: flex;
  flex-direction: row;
  height: 100px;
}

.image-selector img {
  padding: 5px;
  aspect-ratio: 1/1;
  object-fit: contain;
  border: 1px solid #b6adad;
  height: 100%;
  margin-right: 5px;
}
</style>
