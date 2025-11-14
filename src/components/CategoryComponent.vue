<script lang="ts">
export default {
  name: 'CategoryComponent',
  props: {
    title: String,
    bgColor: String,
    itemCount: String,
    image_src: String,
  },
}
</script>

<template>
  <button class="category_btt" :style="{ backgroundColor: bgColor }">
    <img class="category_img" :src="`http://localhost:3000/${image_src}`" alt="Category image" />
    <span class="category_name">{{ title }}</span>
    <span class="category_count">{{ itemCount }} items</span>
  </button>
</template>

<style scoped>
.category_list {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: none;
  margin-bottom: 50px;
}

.category_btt {
  padding: 5px;
  min-width: 100px;
  width: 100px;
  height: 130px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

.category_btt:hover {
  background: var(--hover);
}

.category_img {
  width: 65%;
  margin-bottom: 10px;
}

.category_name {
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 5px;
}

.category_count {
  font-size: 10px;
  color: lightslategray;
}
</style>
