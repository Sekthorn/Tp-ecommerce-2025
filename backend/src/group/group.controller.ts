import { Controller, Get } from '@nestjs/common';

@Controller('api/groups')
export class GroupsController {
  @Get()
  findAll(): any {
    return [
      'Milks & Diaries',
      'Coffees & Teas',
      'Pet Foods',
      'Meats',
      'Vegetables',
      'Fruits',
    ];
  }
}
