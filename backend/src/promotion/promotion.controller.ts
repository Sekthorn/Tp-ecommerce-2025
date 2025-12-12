import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PromotionsService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

const multerOptions: MulterOptions = {
  storage: multer.diskStorage({
    destination: './uploads/promotion',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      callback(null, uniqueSuffix + '-' + file.originalname);
    },
  }),
  limits: {
    fileSize: 1 * 1024 * 1024, // Limit file size to 1MB
  },
};

@Controller('api/promotions')
export class PromotionsController {
  constructor(private readonly promotionService: PromotionsService) {}

  @Get()
  findAll(): any {
    return this.promotionService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', multerOptions))
  createPromotion(
    @UploadedFile() image: Express.Multer.File,
    @Body() body: CreatePromotionDto,
  ): any {
    console.log('image', image);
    const promotion = this.promotionService.create({
      ...body,
      image: image.path,
    });
    return promotion;
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  updatePromotion(
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File,
    @Body() body: Partial<UpdatePromotionDto>,
  ): any {
    console.log('image', image);
    return this.promotionService.update(id, {
      ...body,
      image: image.path,
    });
  }

  @Delete(':id')
  deletePromotion(@Param('id') id: string): any {
    const result = this.promotionService.delete(id);
    return result;
  }
}
