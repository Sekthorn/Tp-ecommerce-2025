import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'promotion',
})
export class Promotion extends Model {
  @Column
  title: string;

  @Column
  buttonColor: string;

  @Column
  url: string;

  @Column
  color: string;

  @Column
  image: string;
}
