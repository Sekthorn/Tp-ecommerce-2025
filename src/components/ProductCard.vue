<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {EndPoint} from "@/utils/end_point.js";

export interface ProductCardProps {
  id: number;
  image: string;
  categoryId: string;
  name: string;
  rating: number;
  price: number;
  promotionAsPercentage?: number;
  size: string;
  instock : number | null;
  countSold : number | null;
  group : string | null;
  createdAt : Date;
  updatedAt : Date;
}

function extract_image(img: string) : string {
  const arr = img.replace(/[\[\]\s]/g, '').split(',');
  console.log("arr : " + arr);
  return arr[0]!.replace('"', "").replace('"', "");
}

function  calculateDiscountedPrice(original: number, discount: number | null) : string {
  return (original - (original * (discount ?? 0))).toFixed(2);
}

const props = defineProps<{
  product: ProductCardProps
}>();

const isAdded = ref(false);
const quantity = ref(1);

function toggleCart() {
  isAdded.value = !isAdded.value;
  if (isAdded.value) {
    quantity.value = 1;
  }
}

function decreaseQuantity() {
  if (quantity.value > 0) {
    quantity.value--;
  }
  if (quantity.value == 0) {
    isAdded.value = false;
  }
}

function increaseQuantity() {
  quantity.value++;
}

</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <span v-if="product.promotionAsPercentage" class="discount-badge">{{ product.promotionAsPercentage }}%</span>
      <img :src="EndPoint.image_url(extract_image(product.image))" :alt="product.name" />
    </div>
    <div class="product-info">
<!--      <div class="product-brand">{{ product.brand }}</div>-->
<!--      <div class="product-category">{{ product.categoryId }}</div>-->
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-rating">
        <span class="stars">
          <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= product.rating }">★</span>
        </span>
        <span class="rating-value">({{ product.rating.toFixed(1) }})</span>
      </div>
      <div class="product-weight">{{ product.size }}</div>
      <div class="product-footer">
        <div class="product-price">
          <span class="current-price">${{ product.price.toFixed(2) }}</span>
          <span v-if="product.promotionAsPercentage" class="original-price">${{calculateDiscountedPrice(product.price, product.promotionAsPercentage) }}</span>
        </div>
        <button v-if="!isAdded || quantity == 0" class="add-to-cart-btn" @click="toggleCart">
          Add +
        </button>
        <div v-else class="quantity-selector">
          <span class="quantity-display">{{ quantity }}</span>
          <div class="qty-buttons">
            <button class="qty-btn increase" @click="increaseQuantity">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            <button class="qty-btn decrease" @click="decreaseQuantity">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  width: 230px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  overflow: hidden;
  transition: transform 0.2s;
}

.product-image {
  position: relative;
  padding: 20px;
  text-align: center;
  background: #f8f9fa;
}

.discount-badge {
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 0;
  background: #00b853;
  color: white;
  padding: 4px 12px;
  border-radius: 0  15px 15px 0;
  font-weight: 600;
  font-size: 14px;
}

.product-image img {
  height: 130px;
  max-width: 100%;
  object-fit: contain;
  scale: 1.3;
}

.product-info {
  padding: 16px;
}

.product-brand {
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

.product-category {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.product-name {
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 8px 0;
  line-height: 1.4;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #d0d0d0;
  font-size: 14px;
}

.star.filled {
  color: #ffc107;
}

.rating-value {
  font-size: 12px;
  color: #666;
}

.product-weight {
  font-size: 13px;
  color: #666;
  margin: 8px 0;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: #00b853;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.add-to-cart-btn {
  background: rgba(170, 244, 203, 0.63);
  color: green;
  font-weight: 600;
  border: 1px solid rgba(0, 153, 68, 0.28);
  border-radius: 6px;
  width: 70px;
  margin-bottom: 5px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.add-to-cart-btn:hover {
  background: #009944;
  color: white;
}

.add-to-cart-btn:active {
  transform: scale(0.95);
}

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
