import { Get, Controller } from '@nestjs/common';

import { TodosService } from './todo.service';

@Controller('todos')
export class TodosControllers {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodos() {
    const todos = await this.todosService.getTodos();
    return todos;
  }
}
