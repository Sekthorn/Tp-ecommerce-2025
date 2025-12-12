import { Module } from '@nestjs/common';
import { GroupsController } from './group.controller';

@Module({
  controllers: [GroupsController],
  providers: [],
})
export class GroupsModule {}
