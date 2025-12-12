<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<ComponentAttribute>(), {
  label: 'Featured Categories'
})

interface ComponentAttribute {
  label?: string;
}

const categories = ref([
  'All',
  'Milks & Dairies',
  'Coffes & Teas',
  'Pet Foods',
  'Meats',
  'Vegetables',
  'Fruits'
]);

const activeCategory = ref('All');

const selectCategory = (category: string) => {
  activeCategory.value = category;
};
</script>

<template>
  <div class="featured-container">
    <div class="label-container">{{ props.label }}</div>
    <div class="categories-nav">
      <button
        v-for="category in categories"
        :key="category"
        :class="['category-btn', { active: activeCategory === category }]"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.featured-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.label-container {
  font-size: 24px;
  font-weight: bold;
  color: #253D4E;
}

.categories-nav {
  display: flex;
  gap: 10px;
}

.category-btn {
  padding: 8px 10px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #7E7E7E;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  color: #3BB77E;
}

.category-btn.active {
  font-weight: 800;
  color: black
}
</style>
