import { IsString, MinLength, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsNumber()
  @IsOptional()
  countSold: number;

  @IsNumber()
  @IsOptional()
  promotionAsPercentage: number;

  @IsString()
  @IsOptional()
  size: string;

  // @IsString()
  // @IsOptional()
  // image: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  categoryId: number;
}
