<script lang="ts">
import axios from 'axios'

type Promotion = {
  title: string
  color: string
  buttonColor: string
  image: string
}

type Category = {
  name: string
  color: string
  productCount: number
  image: string
}

export default {
  name: 'App',
  data() {
    return {
      promotions: [] as Promotion[],
      categories: [] as Category[],
    }
  },

  methods: {
    async fetchPromotions() {
      try {
        await axios.get('http://localhost:3000/api/promotions').then((response) => {
          this.promotions = response.data
          console.log(this.promotions)
        })
      } catch (error) {
        console.error('Error fetching promotions:', error)
      }
    },
    async fetchCategories() {
      try {
        await axios.get('http://localhost:3000/api/categories').then((response) => {
          this.categories = response.data
          console.log(this.categories)
        })
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
  },
  mounted() {
    this.fetchPromotions()
    this.fetchCategories()
  },
}
</script>

<template>
  <div class="container">
    <div v-for="(category, index) in categories" :key="index" class="categoriesC_list">
      <CategoryComponent
        :title="category.name"
        :bgColor="category.color"
        :itemCount="category.productCount"
        :image_src="category.image"
      />
    </div>
  </div>
  <div class="posterC_list">
    <PosterComponent
      v-for="(promotion, index) in promotions"
      :key="index"
      :title="promotion.title"
      :bgColor="promotion.color"
      :btn_color="promotion.buttonColor"
      :image_src="promotion.image"
    />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.categoriesC_list {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}
.container {
  display: flex;
  width: 100%;
}

.posterC_list {
  display: flex;
  flex-direction: row;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 32px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
