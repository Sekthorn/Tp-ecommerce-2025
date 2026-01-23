import type { ProductCardProps } from '@/components/ProductCard.vue'
import { Product } from '@/models/product'
import { EndPoint } from '@/utils/end_point'

export class ProductsManager {
  public products: Product[] = []

  public static new(): ProductsManager {
    return new ProductsManager()
  }

  public async loadProducts(): Promise<ProductsManager> {
    let items: ProductCardProps[] = []
    try {
      const response = await fetch(EndPoint.products)
      items = await response.json()
    } catch (error) {
      console.log(error)
    }
    this.products = items.map(
      (item) =>
        new Product(
          item.id,
          item.image,
          item.categoryId,
          item.name,
          item.rating,
          item.price,
          item.promotionAsPercentage,
          item.size,
          item.instock,
          item.countSold,
          item.group,
          item.createdAt,
          item.updatedAt,
        ),
    )
    return this
  }

  public getProducts(): Product[] {
    return this.products
  }

  public get_product_by_group(group: string): Product[] {
    return this.products.filter((product) => product.group === group)
  }

  public get_product_by_category(cate_id: string): Product[] {
    return this.products.filter((product) => product.categoryId === cate_id)
  }

  public get_popular_products(): Product[] {
    return this.products.filter((product) => (product.countSold ?? 0) > 10)
  }

  async load_or_init(): Promise<ProductsManager> {
    if (this.products.length === 0) {
      return this.loadProducts()
    }
    return this
  }
}
