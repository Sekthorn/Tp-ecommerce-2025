<script setup lang="ts">

import SubHeaderComponent from "@/components/SubHeaderComponent.vue";



</script>

<template>

  <main>
    <HeaderComponent/>
    <SubHeaderComponent/>
    <router-view/>
  </main>
</template>

<style>



header {
  line-height : 1.5;
}


body  {
  background: white;
  font-family: Quicksand,serif;
}

</style>
