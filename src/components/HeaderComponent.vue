<script setup lang="ts">
import ShopMainIcon from '@/assets/ShopMainIcon.vue'
import MenuItemComponent from '@/components/MenuItemComponent.vue'
import UserIcon from '@/assets/UserIcon.vue'
import CompareIcon from '@/assets/CompareIcon.vue'
import WhitelistIcon from '@/assets/WhitelistIcon.vue'
import CartIcon from '@/assets/CartIcon.vue'
import SearchBoxComponent from '@/components/SearchBoxComponent.vue'
</script>

<template>
  <div class="header">
    <div class="header-items">
      <div class="header-icon-holder">
        <ShopMainIcon />
        <div class="header-label">
          <p class="header-label-text-1">Melon</p>
          <p class="header-label-text">Mart & Grocery</p>
        </div>
      </div>
      <SearchBoxComponent class="search-box" />
      <div class="header-buttons">
        <MenuItemComponent :left_icon="UserIcon" label="Sign In" />
        <MenuItemComponent :left_icon="CompareIcon" label="Compare" />
        <MenuItemComponent :left_icon="WhitelistIcon" label="Whitelist" />
        <MenuItemComponent :left_icon="CartIcon" label="Cart" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.search-box {
  flex: 1;
}
.header-buttons {
  display: flex;
  gap: 10px;
}
.header {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-icon-holder {
  display: flex;
  gap: 10px;
}
.header-label {
  position: relative;
  height: 100%;
  width: 120px;
}
.header-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-label-text-1 {
  font-size: 2.5rem;
  color: green;
  font-weight: bold;
  position: absolute;
  margin: 0;
  padding: 0;
  top: -15px;
  left: 0;
}

.header-label-text {
  font-size: 1rem;
  color: gray;
  position: absolute;
  top: 35px;
  left: 0;
}
</style>
