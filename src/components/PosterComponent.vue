<script setup lang="ts">
class PosterItem {
  img: string
  label: string
  btt_label: string
  btt_color: string
  bg_color: string

  constructor(img: string, label: string, btt_label: string, btt_color: string, bg_color: string) {
    this.img = img
    this.label = label
    this.btt_label = btt_label
    this.btt_color = btt_color
    this.bg_color = bg_color
  }
}

const item_poster: PosterItem[] = [
  new PosterItem("image/Cms-1.png", "Everyday Fresh & Clean with Our Products", "Shop Now", "green", "#F0E8D5"),
  new PosterItem("image/Cms-2.png", "Make your Breakfast Healthy and Easy", "Shop Now", "green", "#F3E8E8"),
  new PosterItem("image/Cms-3.png", "Discover the Best Deals on Groceries", "Shop Now", "#FDC040", "#E7EAF3"),
]

</script>

<template>
  <div class="poster_list" role="list">
    <div v-for="item in item_poster" :key="item.label" class="poster_item" role="listitem">
      <div class="poster_main" :style="{ backgroundColor: item.bg_color }">
        <div class="poster_content">
          <span class="poster_label">{{ item.label }}</span>
          <button
            class="poster_btt"
            :style="{ backgroundColor: item.btt_color }"
          >
            {{ item.btt_label }}
          </button>
        </div>

        <img class="poster_img" :src="item.img" alt="Poster image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.poster_list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 24px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.poster_main {
  position: relative;
  width: 520px;
  height: 260px;
  border-radius: 12px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.poster_content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.poster_label {
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  color: #181818;
  max-width: 250px;
}

.poster_btt {
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.poster_btt:hover {
  background-color: #006400; /* darker green on hover */
}

.poster_img {
  position: absolute;
  bottom: 0;
  right: 20px;
  height: 160px;
  width: auto;
  object-fit: contain;
}
</style>
