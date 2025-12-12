import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './category/category.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { PromotionsModule } from './promotion/promotion.module';
import { GroupsModule } from './group/group.module';
import { ProductsModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    CategoriesModule,
    PromotionsModule,
    GroupsModule,
    ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Serve from the uploads folder
      serveRoot: '/uploads', // Serve files at http://localhost:3000/uploads
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
