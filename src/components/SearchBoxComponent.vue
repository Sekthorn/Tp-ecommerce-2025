<script setup lang="ts">


import SearchIcon from "@/assets/SearchIcon.vue";
</script>

<template>
  <form class="search-box">
    <select name="categories" id="categories">
      <option value="all">All Categories</option>
      <option value="men">Men</option>
      <option value="women">Women</option>
      <option value="kids">Kids</option>
    </select>
    <div class="seperator"/>

    <input type="text" placeholder="Search for products"/>
    <SearchIcon class="search-icon"/>
  </form>
</template>

<style scoped>

.search-box{
  padding: 8px;
  margin: 0 5%;
  border-radius: 6px;
  height: 40px;
  display: flex;
  outline: 1px solid #ccc;
}

.search-icon {
  align-self: center;
  margin-right: 5px;
}

input ,select{
  border: none;
  outline: none;
}

input{

  padding-left: 10px;
  padding-right: 10px;
  flex: 4
}

select{
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  margin-right: 5px;
}

.seperator{
  margin-left: 10px;
  border-right: 1px solid #ccc;

}


</style>
