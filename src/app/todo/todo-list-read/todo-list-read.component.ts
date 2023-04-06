import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';
import { TodoModule } from '../todo.module';

@Component({
  selector: 'app-todo-list-read',
  standalone: true,
  imports: [CommonModule, TodoModule],
  templateUrl: './todo-list-read.component.html',
  styleUrls: ['./todo-list-read.component.scss']
})
export class TodoListReadComponent {

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }
}
