import { IsString, MinLength } from 'class-validator';

export class CreatePromotionDto {
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  title: string;

  @IsString()
  buttonColor: string;

  @IsString()
  color: string;

  @IsString()
  image: string;

  @IsString()
  url: string;
}
