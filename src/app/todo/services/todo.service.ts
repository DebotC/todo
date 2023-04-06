import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../model/todo";

@Injectable({ providedIn: 'root' })
export class TodoService {

    todos: Todo[] = [
        {
          title: 'My first todo',
          description: 'This is my first todo'
        }, 
        {
          title: 'My second todo'
        }
      ];

    todos$ = new BehaviorSubject<Todo[]>(this.todos);

    removeTodo(index: number): void {
      const todos = this.todos$.getValue();
      todos.splice(index, 1);
      this.todos$.next(todos);
    }
  
    addTodo(todo: Todo): void {
      const todos = this.todos$.getValue();
      todos.push(todo);
      this.todos$.next(todos);
    }
}