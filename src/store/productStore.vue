 <!-- <script>
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    products: [],
    promotions: [],
    categories: [],
  }),
  getter: {
    getCategoriesByGroups: (state) => {
      return state.categories.filter((category) => category.group === groupName)
    },
    getProductsByGroups: (state) => {
      return state.products.filter((product) => product.group === groupName)
    },
    getProductsById: (state) => {
      return state.products.filter((product) => product.id === id)
    },
    getPopularProduct: (state) => {
      return state.products.filter((product) => product.countId > 10)
    },
  },
  actions: {
    setCategories(categories) {
      this.categories = categories
    },
    setProducts(products) {
      this.products = products
    },
    setPromotions(promotions) {
      this.promotions = promotions
    },
    setGroups(groups) {
      this.groups = groups
    },
  },
})
</script>
 -->
