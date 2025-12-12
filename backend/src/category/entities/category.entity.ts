import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'category',
})
export class Category extends Model {
  @Column
  name: string;

  @Column
  productCount: number;

  @Column
  color: string;

  @Column
  image: string;

  @Column
  group: string;
}
