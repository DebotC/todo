import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

  @Input() todo!: Todo;
  @Input() showEdit = false;
  @Output() removeTodo = new EventEmitter();

  remove(): void {
    this.removeTodo.emit();
  }
}
