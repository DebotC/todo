import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';
import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @ViewChild(TodoCreateComponent) todoCreateComponent!: TodoCreateComponent;

  todos$: Observable<Todo[]>;
  selectedTodo?: Todo;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  isSelectedTodo(todo: Todo): boolean {
    return this.selectedTodo === todo;
  }

  onSelectTodo(todo: Todo): void {
    this.selectedTodo = todo;
  }

  removeTodo(index: number): void {
    this.todoService.removeTodo(index);
  }

  addTodo(): void {
    this.todoService.addTodo(this.todoCreateComponent.todoForm.value);
  }
}
