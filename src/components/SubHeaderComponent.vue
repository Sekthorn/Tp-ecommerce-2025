<script setup lang="ts">

import MenuItemComponent from "@/components/MenuItemComponent.vue";
import DownArrowIcon from "@/assets/DownArrowIcon.vue";
import MenuIcon from "@/assets/MenuIcon.vue";
import HotDealIcon from "@/assets/HotDealIcon.vue";
import HeadSetIcon from "@/assets/HeadSetIcon.vue";
import {useProductStore} from "@/shop/state_mgr.js";
import {onMounted, ref,  type Ref} from "vue";
import type {CategoryItem} from "@/models/category.js";


const state = useProductStore().categories;

const categories: Ref<string[]> = ref([]);

onMounted(async () => {
  const list : CategoryItem[] = (await state.load_or_init()).get_categories();
  for (let i= 0; i< list.length; i++){
    categories.value.push(list[i]!.name);
  }

})
</script>

<template>
  <div class="sub-header">
    <div class="sub-header-left">
      <MenuItemComponent :right_icon="DownArrowIcon" :left_icon="MenuIcon" :background="'green'" color='white' label="Browse All Categories" :list="categories"/>
      <MenuItemComponent bold_text label="Hot Deals" :left_icon="HotDealIcon"/>
      <MenuItemComponent bold_text label="Home"/>
      <MenuItemComponent :stroke="'#000000'" :right_icon="DownArrowIcon" bold_text label="Food"/>
      <MenuItemComponent :stroke="'#000000'" :right_icon="DownArrowIcon" bold_text label="Vegetables"/>
      <MenuItemComponent bold_text label="Drink"/>
      <MenuItemComponent bold_text label="Cookies"/>
      <MenuItemComponent :stroke="'#000000'" :right_icon="DownArrowIcon" bold_text label="Meat & Seafood"/>
      <MenuItemComponent bold_text label="Bakery"/>
    </div>
    <div class="contact-holder">
      <HeadSetIcon class="contact-icon" />
      <div class="contact-label">
        <p class="contact-label-text-1">1999 - 1000</p>
        <p class="contact-label-text">24/7 Support Center</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.contact-icon{
  width : 35px;
}
.contact-holder{
  width           : 170px;
  display         : flex;
  align-items     : center;
  gap             : 10px;
}

.contact-label{
  position: relative;
}
.sub-header {
  margin-top      : 10px;
  margin-bottom   : 15px;
  border-top      : 1px solid #ccc;
  border-bottom   : 1px solid #ccc;
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  height          : 55px;
}

.sub-header-left {
  gap         : 10px;
  display     : flex;
  align-items : center;
}

.contact-label-text-1{
  text-align: justify;
  width: 150px;
  font-size: 1.3rem;
  color: green;
  font-weight: bold;
  position: absolute;
  margin: 0;
  padding: 0;
  top : -25px;
  left: 0;
}

.contact-label-text{
  width: 150px;
  font-size: 0.8rem;
  color: gray;
  position: absolute;
  top: 2px;
  left: 2px;
}


</style>
