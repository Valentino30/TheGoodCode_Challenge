import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoSchema } from './todo.model';
import { TodosService } from './todo.service';
import { TodosControllers } from './todo.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodosControllers],
  providers: [TodosService],
})
export class TodosModule {}
