import {
  Get,
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { TodosService } from './todo.service';

@Controller('todos')
export class TodosControllers {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodos() {
    const todos = await this.todosService.getTodos();
    return todos;
  }

  @Post()
  async addTodo(@Body('name') name: string) {
    const newTodo = await this.todosService.addTodo(name);
    return newTodo;
  }

  @Put(':id')
  async toggleTodo(@Param('id') todoId: string) {
    const toggledTodo = await this.todosService.toggleTodo(todoId);
    return toggledTodo;
  }

  @Delete(':id')
  async deleteTodo(@Param('id') todoId: string) {
    const successResponse = await this.todosService.deleteTodo(todoId);
    return successResponse;
  }
}
