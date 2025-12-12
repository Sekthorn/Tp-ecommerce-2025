import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category,
  ) {}

  create(createProductDto: CreateCategoryDto) {
    return this.categoryRepository.create(createProductDto as any);
  }

  findAll() {
    return this.categoryRepository.findAll();
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const result = this.categoryRepository.update(updateCategoryDto as any, {
      where: { id },
      returning: true,
    });

    if (!result) {
      throw new Error('Category not found');
    }

    return 'update success';
  }

  delete(id: number) {
    const result = this.categoryRepository.destroy({ where: { id } });
    if (!result) {
      throw new Error('Category not found');
    }
    return 'delete success';
  }
}
