<script setup lang="ts">

import ProductContainer from "@/container/ProductContainer.vue";

</script>

<template>

  <main>
    <MenuConponent :label="'Featured Categories'"/>
    <CategoryComponent/>
    <PromotionComponent/>
    <MenuConponent :label="'Popular Products'"/>
    <ProductContainer/>
  </main>
</template>

<style>




header {
  line-height : 1.5;
}

body  {
  background: white;
}


@media (min-width : 1024px) {
  header {
    display       : flex;
    place-items   : center;
    padding-right : calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display     : flex;
    place-items : flex-start;
    flex-wrap   : wrap;
  }
}
</style>
