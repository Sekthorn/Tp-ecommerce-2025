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
