import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectModel(Promotion)
    private promotionRepository: typeof Promotion,
  ) {}

  create(createProductDto: CreatePromotionDto) {
    return this.promotionRepository.create(createProductDto as any);
  }

  findAll() {
    return this.promotionRepository.findAll();
  }
  update(id: string, updatePromotionDto: Partial<UpdatePromotionDto>) {
    const result = this.promotionRepository.update(updatePromotionDto as any, {
      where: { id },
      returning: true,
    });
    if (!result) {
      throw new Error('Promotion not found');
    }
    return 'Update success';
  }

  delete(id: string) {
    const result = this.promotionRepository.destroy({
      where: { id },
    });
    if (!result) {
      throw new Error('Promotion not found');
    }
    return 'Delete success';
  }
}
