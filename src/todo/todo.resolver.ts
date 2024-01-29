import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput } from './dto/Inputs';


@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo, { name: 'CreateTodo' })
  createTodo(@Args('dataTodoACrear') createTodoInput: CreateTodoInput) {
    return this.todoService.crete(createTodoInput);
  }

  @Mutation(() => Todo, { name: 'UpdateTodo' })
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {}
}
