import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multer from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UpdateProductDto } from './dto/update-product.dto';

const multerOptions: MulterOptions = {
  storage: multer.diskStorage({
    destination: './uploads/product',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      callback(null, uniqueSuffix + '-' + file.originalname);
    },
  }),
  limits: {
    fileSize: 1 * 1024 * 1024, // Limit file size to 1MB
  },
};

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(): any {
    return this.productService.findAll();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('image', 10, multerOptions))
  createProduct(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() body: any,
  ): any {
    const imagesPath = [];
    if (images) {
      for (const image of images) {
        imagesPath.push(image.path);
      }
    }
    console.log('imagesPath', imagesPath);
    const product = this.productService.create({
      ...body,
      image: JSON.stringify(imagesPath),
    });
    return product;
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('image', 10, multerOptions))
  updateProduct(
    @Param('id') id: number,
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() body: UpdateProductDto,
  ): any {
    const imagesPath = [];
    if (images) {
      for (const image of images) {
        imagesPath.push(image.path);
      }
    }
    console.log('update', id, body, imagesPath);
    const result = this.productService.update(id, {
      ...body,
      image: JSON.stringify(imagesPath),
    });
    if (result) {
      return { message: 'Product updated successfully' };
    } else {
      return { message: 'Product not found' };
    }
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): any {
    const result = this.productService.delete(id);
    if (result) {
      return { message: 'Product deleted successfully' };
    } else {
      return { message: 'Product not found' };
    }
  }
}
