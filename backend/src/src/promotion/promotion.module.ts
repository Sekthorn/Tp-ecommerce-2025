import { Module } from '@nestjs/common';
import { PromotionsController } from './promotion.controller';
import { PromotionsService } from './promotion.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Promotion } from './entities/promotion.entity';

@Module({
  imports: [SequelizeModule.forFeature([Promotion])],
  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
