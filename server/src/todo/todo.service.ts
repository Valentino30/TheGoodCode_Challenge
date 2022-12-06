import { Model } from 'mongoose';
import { Injectable, HttpException, NotFoundException } from '@nestjs/common';

import { Todo } from './todo.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoModel.find();
    return todos as Todo[];
  }

  async addTodo(name: string): Promise<Todo> {
    const newTodo = new this.todoModel({ name });
    await newTodo.save();
    return newTodo as Todo;
  }

  async toggleTodo(todoId: string): Promise<Todo> {
    const todo = await this.findTodo(todoId);
    todo.selected = !todo.selected;
    const toggledTodo = await todo.save();
    return toggledTodo as Todo;
  }

  async deleteTodo(todoId: string) {
    const todo = await this.findTodo(todoId);
    await todo.delete();
    const successResponse = {
      success: true,
      message: `${todo.name} has been successfully deleted`,
    };
    return successResponse;
  }

  private async findTodo(todoId: string): Promise<Todo> {
    let todo;
    try {
      todo = await this.todoModel.findById(todoId);
      if (!todo) throw new NotFoundException('Could not find todo');
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
    return todo as Todo;
  }
}
