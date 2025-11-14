<script lang="ts">
export default {
  name: 'PosterComponent',
  props: {
    title: String,
    bgColor: String,
    btn_color: String,
    image_src: String,
  },
}
</script>

<template>
  <div class="poster_main" :style="{ backgroundColor: bgColor }">
    <div class="poster_content">
      <span class="poster_label">{{ title }}</span>
      <button class="poster_btt" :style="{ backgroundColor: btn_color }">
        Shop Now <span class="arrow_icon">→</span>
      </button>
    </div>
    <img class="poster_img" :src="`http://localhost:3000/${image_src}`" alt="Poster image" />
  </div>
</template>

<style scoped>
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
  color: #23395d;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  max-width: 250px;
  text-align: left;
}

.poster_btt {
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 28px 12px 22px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.poster_btt:hover {
  filter: brightness(0.85);
}
/* Arrow icon style */
.arrow_icon {
  font-size: 18px;
  margin-left: 6px;
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
