<script setup lang="ts">
import { CategoryItem } from '@/models/category'
import { useRouter } from 'vue-router'

defineProps<{
  cate: CategoryItem
}>()

const router = useRouter()

async function back_home() {
  await router.push('/')
}
</script>

<template>
  <div class="category-view">
    <img class="showcase-bg" src="/showcase.png" alt="showcase" />
    <p class="main-title">{{ cate?.name }}</p>
    <div class="cate-path">
      <p @click="back_home" class="path-ele">Home</p>
      <p class="sep">></p>
      <p class="path-ele">Category</p>
      <p class="sep">></p>
      <p class="path-ele">{{ cate?.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.category-view {
  background: rgba(102, 131, 102, 0.28);
  position: relative;
  height: 175px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
}

.main-title {
  color: black;
  font-size: 2.5rem;
  font-weight: bold;
}

.showcase-bg {
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cate-path {
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
</style>
