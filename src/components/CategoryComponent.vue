<script setup lang="ts">

const color_set = [
  {bg: '#E8F9EF', hover: '#c8f1dc'},
  {bg: '#FFF0E6', hover: '#ffd8c2'},
  {bg: '#EAFEEC', hover: '#d4f8da'},
  {bg: '#FFECEF', hover: '#ffd6dc'},
  {bg: '#FFF8E7', hover: '#ffefc8'},
  {bg: '#F1EDFF', hover: '#e2d9ff'},
  {bg: '#EBFAEE', hover: '#d5f4dc'},
  {bg: '#EAF6FF', hover: '#d2ecff'},
  {bg: '#FFF3E0', hover: '#ffe3b8'}
]

class CategoryItem {
  img: string;
  name: string;
  count: number;
  prefix: string;
  color: string;
  hover_color: string;

  constructor(img: string, name: string, count: number, prefix: string = "item(s)", color: string | null = null, hover_color: string | null = null) {
    const random_color = color_set[Math.floor(Math.random() * color_set.length)]!;
    this.img = img;
    this.name = name;
    this.count = count;
    this.prefix = prefix;
    this.color = color ?? random_color.bg;
    this.hover_color = hover_color ?? random_color.hover;
  }

}

const item_category: CategoryItem[] = [
  new CategoryItem("image/cate_13.png", "Category 1", 10, "item(s)"),
  new CategoryItem("image/cat-11 1.png", "Category 2", 10,),
  new CategoryItem("image/cat-12.png", "Category 3", 10,),
  new CategoryItem("image/cat-4.png", "Category 4", 10,),
  new CategoryItem("image/cat-5.png", "Category 5", 10,),
  new CategoryItem("image/cat-6.png", "Category 6", 10,),
  new CategoryItem("image/cat-7.png", "Category 7", 10,),
  new CategoryItem("image/cat-8.png", "Category 8", 10,),
  new CategoryItem("image/cat-9.png", "Category 9", 10,),
  new CategoryItem("image/cat-10.png", "Category 10", 10,),
]


</script>

<template>
  <div class="category_list" role="list">
    <button
      v-for="item in item_category"
      :key="item.name"
      role="menuitem"
      type="button"
      class="category_btt"
      :style="{ '--bg': item.color, '--hover': item.hover_color }"
    >
      <img class="category_img" :src="item.img" alt="Category image">
      <span class="category_name">{{ item.name }}</span>
      <span class="category_count">{{ item.count }} {{ item.prefix }}</span>


    </button>

  </div>

</template>

<style scoped>

.category_list {
  display        : flex;
  flex-direction : row;
  overflow-x: scroll;
  scrollbar-width: none;
  margin-bottom: 50px;

}

.category_btt {
  padding         : 5px;
  min-width       : 100px;
  width           : 100px;
  height          : 130px;
  margin          : 10px;
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  align-items     : center;
  background      : var(--bg);
  border          : 1px solid rgba(0, 0, 0, 0.06);
  border-radius   : 8px;

}

.category_btt:hover {
  background : var(--hover);
}

.category_img {
  width         : 65%;
  margin-bottom : 10px;
}

.category_name {
  font-size     : 11px;
  font-weight   : bold;
  margin-bottom : 5px;
}

.category_count {
  font-size : 10px;
  color     : lightslategray;
}


</style>
