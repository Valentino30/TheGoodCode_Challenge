import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { Todo } from './todo.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.find();
    return todos as Todo[];
  }
}
