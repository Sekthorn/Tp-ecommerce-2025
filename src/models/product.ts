export class Product {
  id: number
  image: string
  categoryId: string
  name: string
  rating: number
  price: number
  promotionAsPercentage?: number
  size: string
  instock: number | null
  countSold: number | null
  group: string | null
  createdAt: Date
  updatedAt: Date

  private img_arr: string[] = []

  constructor(
    id: number,
    image: string,
    categoryId: string,
    name: string,
    rating: number,
    price: number,
    promotionAsPercentage: number = 0,
    size: string,
    instock: number | null,
    countSold: number | null,
    group: string | null,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id
    this.image = image
    this.categoryId = categoryId
    this.name = name
    this.rating = rating
    this.price = price
    this.promotionAsPercentage = promotionAsPercentage
    this.size = size
    this.instock = instock
    this.countSold = countSold
    this.group = group
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public get imgs_or_init(): string[] {
    if (this.img_arr.length > 0) return this.img_arr
    this.img_arr = this.image
      .replace(/[\[\]\s]/g, '')
      .replace('"', '')
      .split(',')

    return this.img_arr
  }

  public get singleImg(): string {
    this.img_arr = this.image.replace(/[\[\]\s]/g, '').split(',')
    return this.img_arr[0]!.replace('"', '').replace('"', '')
  }

  public get discountedPrice(): string {
    return (this.price - this.price * (this.promotionAsPercentage ?? 0)).toFixed(2)
  }

  public static error = new Product(
    0,
    '',
    '',
    'Error',
    0,
    0,
    0,
    '',
    0,
    0,
    '',
    new Date(),
    new Date(),
  )
}
