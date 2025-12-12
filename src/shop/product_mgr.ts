import type {ProductCardProps} from "@/components/ProductCard.vue";
import {EndPoint} from "@/utils/end_point.js";

export class ProductsManager {
  public products: ProductCardProps[] = [];

  public static new(): ProductsManager {
    return new ProductsManager();
  }




  public async loadProducts() : Promise<ProductsManager> {
    let items: ProductCardProps[] = [];
    try{
      const response = await fetch(EndPoint.products);
      items =  await response.json();
    }catch(error){
      console.log(error);
    }
    this.products =  items;
    return this;
  }

  public getProducts() : ProductCardProps[] {
    return this.products;
  }

  public get_product_by_group(group: string) : ProductCardProps[] {
    return this.products.filter(product => product.group === group);
  }

  public get_product_by_category(cate_id: string): ProductCardProps[] {
    return this.products.filter(product => product.categoryId === cate_id);
  }

  public get_popular_products() : ProductCardProps[] {
    return this.products.filter(product => (product.countSold ?? 0) > 10);
  }

  async load_or_init() : Promise<ProductsManager> {
    if(this.products.length === 0) {
      return this.loadProducts();
    }
    return this;
  }
}
