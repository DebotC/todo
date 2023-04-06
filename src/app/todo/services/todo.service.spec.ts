import { TodoService } from './todo.service';
import { Todo } from '../model/todo';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the initial list of todos', () => {
    const todos = service.todos$.getValue();
    expect(todos).toEqual([
      { title: 'My first todo', description: 'This is my first todo' },
      { title: 'My second todo' }
    ]);
  });

  it('should add a new todo to the list', () => {
    const newTodo: Todo = { title: 'My third todo', description: 'This is my third todo' };
    service.addTodo(newTodo);
    const todos = service.todos$.getValue();
    expect(todos).toContain(newTodo);
  });

  it('should delete a todo from the list', () => {
    const indexToDelete = 1;
    service.removeTodo(indexToDelete);
    const todos = service.todos$.getValue();
    expect(todos.length).toBe(1);
    expect(todos[indexToDelete]).toBeUndefined();
  });
});