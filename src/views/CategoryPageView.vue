<script setup lang="ts">


import {CategoryItem} from "@/models/category.js";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useProductStore} from "@/shop/state_mgr.js";
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";

const cate_state = useProductStore().categories;
const cate = ref<CategoryItem>();
const pro_id = useRoute().params.categoryId as string;

onMounted(async () => {
  const cate_item = (await cate_state.load_or_init())
    .categories
    .find((c) => c.id.toString() === pro_id);
  if (!cate_item){
    console.error("not found the item in the state");
    return
  }
  cate.value = cate_item;
})

</script>
<template>
  <PageHeaderComponent :cate="cate ?? CategoryItem.error"/>

</template>

<style scoped>


</style>
