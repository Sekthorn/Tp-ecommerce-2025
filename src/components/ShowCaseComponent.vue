<script setup lang="ts">

import SendIcon from "@/assets/SendIcon.vue";
</script>

<template>
  <div class="showcase-component">
    <img :src="`./showcase.png`" alt="logo" class="showcase-bg"/>
    <div class="showcase-item-left">

      <p class="showcase-item-label">
        Don't Miss Amazing Grocery Deals
      </p>
      <p class="showcase-item-label-sub">
        Sign up for the daily new letters
      </p>
      <div class="showcase-item-input">
        <SendIcon class="send-icon"/>
        <input type="text" placeholder="Your email address" class="field"/>
        <input type="submit" value="Subscribe" class="submit"/>
      </div>

    </div>

    <div class="showcase-item-right">
      <div class="img-container">
        <img :src="`./showcase-pic.png`" alt="logo"/>
      </div>
    </div>

  </div>
</template>

<style scoped>

.send-icon {
  width: 30px;
}

.showcase-item-input {
  background: white;
  height       : 50px;
  border       : none;
  border-radius: 30px;
  padding-left : 20px;
  display: flex;
  justify-content: space-between;
}

.showcase-item-input .field {
  height : 100%;
  width  : 100%;
  outline: none;
  border : none;
  margin-left: 10px;
}

.showcase-item-input .submit {
  height : 100%;
  width  : 230px;
  font-size: 1rem;
  background: #397739;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}


.showcase-item-label {
  font-size   : 3rem;
  color       : black;
  //padding: 50px;
  font-weight : 800;
  text-align  : justify;
}

.showcase-item-label-sub {
  font-size : 1.5rem;
  color     : black;
  margin: 20px 0;
  //padding: 50px;
}

.showcase-item-left {
  flex         : 7;
  padding-left : 60px;
}

.showcase-item-right {
  //background: greenyellow;
  flex : 10;
}

.img-container{
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.showcase-item-right img {
  height: 100%;
  object-fit: contain;
}

.showcase-component {
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 20px;

  position         : relative;
  height           : 400px;
  width            : 100%;
  background-color : rgba(19, 222, 19, 0.42);
  display          : flex;
  justify-content  : center;
  align-items: center;
  flex: 2;
}

.showcase-bg {
  opacity    : 0.5;
  position   : absolute;
  top        : 0;
  left       : 0;
  z-index    : -1;
  width      : 100%;
  height     : 100%;
  object-fit : cover;
}

</style>
