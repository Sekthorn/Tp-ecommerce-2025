import { IsString, MinLength, IsNumber } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;

  @IsNumber()
  productCount: number;

  @IsString()
  color: string;

  @IsString()
  image: string;
}
