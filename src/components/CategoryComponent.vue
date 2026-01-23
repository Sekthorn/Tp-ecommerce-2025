<script setup lang="ts">
import {EndPoint} from "@/utils/end_point.js";
import {useProductStore} from "@/shop/state_mgr.ts";
import {onMounted} from "vue";
import {CategoryManager} from "@/shop/category_mgr.js";
import router from "@/utils/router.js";

const category_state: CategoryManager = useProductStore().categories;

onMounted(async () => {
  await category_state.load_or_init();
})

async function onClick(id: string | number) {
  await router.push({name: "category", params: {categoryId: id}})
}

</script>

<template>
  <div class="category_list" role="list">
    <button
      v-for="item in category_state.get_categories()"
      :key="item.id"
      @click="onClick(item.id)"
      role="menuitem"
      type="button"
      class="category_btt"
      :style="{ '--bg': item.color, '--hover': item.hover_color }"
    >
      <img class="category_img" :src="EndPoint.image_url(item.image)" alt="Category image">
      <span class="category_name">{{ item.name }}</span>
      <span class="category_count">{{ item.productCount }} item(s)</span>


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
