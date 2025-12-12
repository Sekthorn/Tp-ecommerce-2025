import {defineStore} from "pinia";
import {ProductsManager} from "@/shop/product_mgr.js";
import {CategoryManager} from "@/shop/category_mgr.js";
import {PromotionManager} from "@/shop/promotion_mgr.js";

export const useProductStore = defineStore('product', {
  state: () => ({
    products: ProductsManager.new(),
    categories: CategoryManager.new(),
    promotions: PromotionManager.new(),
    groups: []
  }),
  getters: {
    get_product_by_group: state => state.products.get_product_by_group,
    get_product_by_category: state => state.products.get_product_by_category,
    get_popular_products: state => state.products.get_popular_products
  }
})
