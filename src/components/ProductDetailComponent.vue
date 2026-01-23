<script setup lang="ts">
import ItemQuantityComponent from '@/components/ItemQuantityComponent.vue'
import MenuItemComponent from '@/components/MenuItemComponent.vue'
import CartIcon from '@/assets/CartIcon.vue'
import WhitelistIcon from '@/assets/WhitelistIcon.vue'
import ShuffleIcon from '@/assets/ShuffleIcon.vue'
import { Product } from '@/models/product'
import { CategoryItem } from '@/models/category'

withDefaults(
  defineProps<{
    product?: Product
    category?: CategoryItem
  }>(),

  {
    product: () => Product.error,
    category: () => CategoryItem.error,
  },
)
</script>

<template>
  <div class="product-detail-component">
    <div class="stock-information">InStock</div>
    <h1>{{ product.name }}</h1>
    <div class="rating">rating</div>
    <div class="price-holder">
      <p class="displayed-price">{{ `\$${product.discountedPrice}` }}</p>
      <p class="original-price">{{ `\$${product.price}` }}</p>
    </div>
    <p class="product-desc">
      Database Design Process:<br />
      1. Requirements Analysis: Gather and analyze user and application data needs.<br />
      2. Conceptual Design: Create an abstract model (often using ER diagrams) to identify entities,
      relationships, and attributes.<br />
      3. Logical Design: Map the conceptual model to a logical schema (tables, keys,
      relationships).<br />
    </p>
    <div class="quantity-holder">
      <ItemQuantityComponent class="quantity-btt" />
      <MenuItemComponent
        class="add-cart-btt"
        label="Add to Cart"
        :background="'green'"
        :stroke="'white'"
        :color="'white'"
        :left_icon="CartIcon"
      />
      <MenuItemComponent
        class="other-item-btt"
        :border="'1px solid lightgray'"
        label=""
        :background="'white'"
        :color="'white'"
        :left_icon="WhitelistIcon"
      />
      <MenuItemComponent
        class="other-item-btt"
        :border="'1px solid lightgray'"
        label=""
        :background="'white'"
        :color="'white'"
        :left_icon="ShuffleIcon"
      />
    </div>
    <div class="product-infos">
      <p class="info-header">Vendor :</p>
      <p class="info-text">NestMart</p>
    </div>

    <div class="product-infos">
      <p class="info-header">SKU :</p>
      <p class="info-text">{{ product.id }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-infos {
  display: flex;
  gap: 10px;
}

.info-header {
  font-weight: bolder;
}

.product-infos p {
  width: 150px;
}

.product-detail-component {
  color: black;
  padding-left: 5%;
}

.product-detail-component h1 {
  line-height: 1.2;
}

.quantity-btt {
  width: 100px;
}

.stock-information {
  color: green;
  font-weight: bold;
  text-align: center;
  background: #c4f5c4;
  width: 80px;
  margin-top: 5px;
  padding: 2px 10px;
  border-radius: 7px;
}

.other-item-btt {
  padding-left: 10px;
}

.price-holder {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}

.displayed-price {
  color: green;
  font-weight: bolder;
  font-size: 3rem;
}

.add-cart-btt {
  padding: 0 20px;
}

.original-price {
  opacity: 0.5;
  margin-left: 60px;
  margin-top: 20px;
  text-decoration: line-through;
  color: green;
  font-weight: bolder;
  font-size: 1.8rem;
}

.product-detail-component h1 {
  font-size: 2rem;
  font-weight: bold;
}

.quantity-holder {
  gap: 0 10px;
  margin: 30px 0;
  height: 40px;
  display: flex;
}
</style>
