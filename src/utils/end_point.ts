export class EndPoint {
  public static readonly BASE_URL = 'http://localhost:3000'

  public static get products(): string {
    return `${EndPoint.BASE_URL}/api/products`
  }
  public static get categories(): string {
    return `${EndPoint.BASE_URL}/api/categories`
  }
  public static get promotions(): string {
    return `${EndPoint.BASE_URL}/api/promotions`
  }

  public static image_url(image: string): string {
    return `${EndPoint.BASE_URL}/${image}`
  }
}
