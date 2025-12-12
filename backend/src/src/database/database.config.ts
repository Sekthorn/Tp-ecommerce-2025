import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Category } from 'src/category/entities/category.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/data.sqlite3',
  models: [Category],
  autoLoadModels: true,
  synchronize: true,
};
