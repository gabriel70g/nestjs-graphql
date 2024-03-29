import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/Inputs/create-todo-inputs';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del Alma', done: false },
    { id: 2, description: 'Piedra del Espacio', done: true },
    { id: 3, description: 'Piedra del Poder', done: false },
  ];

  findAll() {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo =  this.todos.find(todo => todo.id === id);

    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    
    return todo;
  }

  crete(cretateTodo : CreateTodoInput) : Todo {
    const todo = new Todo();
    todo.description = cretateTodo.description;
    todo.id = Math.max(...this.todos.map(todo => todo.id), 0)+1;

    this.todos.push(todo);

    return todo;
  }
}
