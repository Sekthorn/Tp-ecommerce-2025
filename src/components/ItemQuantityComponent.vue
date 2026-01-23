<script setup lang="ts">
import { ref } from 'vue'

const quantity = ref(1)
const isAdded = ref(true)

function decreaseQuantity() {
  if (quantity.value > 0) {
    quantity.value--
  }
  if (quantity.value == 0) {
    isAdded.value = false
  }
}

function increaseQuantity() {
  quantity.value++
}
</script>

<template>
  <div class="quantity-selector">
    <span class="quantity-display">{{ quantity }}</span>
    <div class="qty-buttons">
      <button class="qty-btn increase" @click="increaseQuantity">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button class="qty-btn decrease" @click="decreaseQuantity">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.quantity-selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 4px 6px;
  gap: 6px;
}

.quantity-display {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  min-width: 20px;
  text-align: center;
  margin-right: auto;
}

.qty-buttons {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.qty-btn {
  background: transparent;
  border: none;
  width: 18px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
  padding: 0;
}

.qty-btn:hover {
  color: #00b853;
}

.qty-btn:active {
  transform: scale(0.9);
}
</style>
