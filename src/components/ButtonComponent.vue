<script setup lang="ts">

</script>

<template>
  <button class="poster_btt" :style="$attrs.style" v-on:click="$attrs.onclick">
    <span class="poster_btt_label">Shop Now</span>
    <img class="poster_btt_icon" src="/right-arrow.png" alt="Poster image">
  </button>
</template>

<style scoped>
.poster_btt{
  height: 40px;
  min-width: 120px;
  align-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.poster_btt_icon{
  margin-left: 8px;
  width: 20%;
  height: 20%;
}

</style>
