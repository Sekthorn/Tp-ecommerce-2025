<script setup lang="ts">
import { onMounted } from 'vue'
import { EndPoint } from '@/utils/end_point'
import { useProductStore } from '@/shop/state_mgr'
import router from '@/utils/router'

const promotion_state = useProductStore().promotions

onMounted(async () => {
  await promotion_state.load_or_init()
})

async function onClick(id: string | number) {
  await router.push({ name: 'product', params: { productId: id } })
}
</script>

<template>
  <div class="poster_list" role="list">
    <div
      v-for="item in promotion_state.get_promotions()"
      class="poster_item"
      role="listitem"
      :key="item.id"
      :style="{ backgroundColor: item.color }"
    >
      <div class="poster_main">
        <span class="poster_label">{{ item.title }}</span>
        <ButtonComponent @click="onClick(item.id)" :style="{ backgroundColor: item.buttonColor }" />
      </div>
      <img class="poster_img" :src="EndPoint.image_url(item.image)" alt="Poster image" />
    </div>
  </div>
</template>

<style scoped>
.poster_img {
  margin-top: auto;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 150px;
}

.poster_list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap: 24px;
  margin-top: 24px;
}
.poster_main {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.poster_label {
  font-size: 16px;
  font-weight: bold;
  color: #181818;
  margin-bottom: 16px;
}

.poster_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 200px;
  width: 350px;
  min-width: 350px;
  background: white;
  border-radius: 8px;
}
</style>
