import { EndPoint } from '@/utils/end_point.js'

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
}

export class CategoryManager {
  categories: CategoryItem[] = []

  public async load_or_init(): Promise<CategoryManager> {
    if (this.categories.length === 0) {
      return this.loadCategories()
    }
    return this
  }

  public async loadCategories(): Promise<CategoryManager> {
    try {
      const response = await fetch(EndPoint.categories)
      const data = await response.json()
      this.categories = data.map(
        (category: any) =>
          new CategoryItem(
            category.id,
            category.name,
            category.productCount || 0,
            category.color,
            category.image || 'imgs/cate_item_1.png',
            category.group,
          ),
      )
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
    return this
  }

  public get_categories(): CategoryItem[] {
    return this.categories
  }

  static new() {
    return new CategoryManager()
  }
}
