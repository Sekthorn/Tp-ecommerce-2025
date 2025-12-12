import {EndPoint} from "@/utils/end_point.js";

export class PromotionItem {
  id: number;
  title: string;
  buttonColor: string;
  url: string;
  color: string;
  image: string;

  constructor(id: number, title: string, buttonColor: string, url: string, color: string, image: string) {
    this.id = id;
    this.title = title;
    this.buttonColor = buttonColor;
    this.url = url;
    this.color = color;
    this.image = image;
  }
}



export class PromotionManager {
  promotions: PromotionItem[] = [];



  public static new() : PromotionManager {
    return new PromotionManager();
  }

  public get_promotions() : PromotionItem[] {
    return this.promotions;
  }

  public async load_items() : Promise<PromotionManager> {
    try {
      const response = await fetch(EndPoint.promotions, {
        method: 'GET',
      });
      const data = await response.json();
      this.promotions = data.map((promotion: any) =>
        new PromotionItem(
          promotion.id,
          promotion.title || "Promotion",
          promotion.buttonColor || "red",
          promotion.url || "Button",
          promotion.color || "white",
          promotion.image || "imgs/cate_item_1.png"
        )
      );
    } catch (error) {
      console.error('Failed to fetch promotions:', error);
    }
    return this;
  }

  public async load_or_init() : Promise<PromotionManager> {
    if (this.promotions.length === 0) {
      return this.load_items();
    }
    return this;
  }

}
