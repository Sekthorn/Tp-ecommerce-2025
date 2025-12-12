import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'product',
})
export class Product extends Model {
  @Column
  name: string;

  @Column
  rating: number;

  @Column
  size: string;

  @Column
  image: string;

  @Column
  price: number;

  @Column
  promotionAsPercentage: number;

  @Column
  categoryId: number;

  @Column
  instock: number;

  @Column
  countSold: number;

  @Column
  group: string;
}
