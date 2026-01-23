<script setup lang="ts">

import ProductContainer from "@/container/ProductContainer.vue";
import ShowCaseComponent from "@/components/ShowCaseComponent.vue";
</script>

<template>
  <ShowCaseComponent/>
  <MenuComponent :label="'Featured Categories'"/>
  <CategoryComponent/>
  <PromotionComponent/>
  <MenuComponent :label="'Popular Products'"/>
  <ProductContainer/>
</template>

<style scoped>

</style>
