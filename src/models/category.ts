import { EndPoint } from '@/utils/end_point'

export class CategoryItem {
  id: number
  name: string
  productCount: number
  color: string
  image: string
  group: string
  hover_color: string

  private static readonly color_set = [
    { bg: '#E8F9EF', hover: '#c8f1dc' },
    { bg: '#FFF0E6', hover: '#ffd8c2' },
    { bg: '#EAFEEC', hover: '#d4f8da' },
    { bg: '#FFECEF', hover: '#ffd6dc' },
    { bg: '#FFF8E7', hover: '#ffefc8' },
    { bg: '#F1EDFF', hover: '#e2d9ff' },
    { bg: '#EBFAEE', hover: '#d5f4dc' },
    { bg: '#EAF6FF', hover: '#d2ecff' },
    { bg: '#FFF3E0', hover: '#ffe3b8' },
  ]

  constructor(
    id: number,
    name: string,
    productCount: number,
    color: string,
    image: string,
    group: string,
  ) {
    const random_color =
      CategoryItem.color_set[Math.floor(Math.random() * CategoryItem.color_set.length)]!
    this.id = id
    this.name = name
    this.productCount = productCount
    this.color = color ?? random_color.bg
    this.image = image
    this.group = group
    this.hover_color = random_color.hover
  }

  static get error(): CategoryItem {
    return new CategoryItem(0, 'Loading Error', 0, '', '', '')
  }

  static async getCategories(id: string | number): Promise<CategoryItem> {
    let temp = new CategoryItem(0, '', 0, '', '', '')
    try {
      const res = await fetch(`${EndPoint.categories}/${id}`)
      temp = await res.json()
    } catch (e) {
      console.log(e)
    }
    return temp
  }
}
