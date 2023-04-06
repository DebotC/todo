import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  const mockTodos: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ];

  beforeEach(async () => {
    jest.mock('../services/todo.service.ts', () => ({
      TodoService: jest.fn().mockReturnValue(todoService),
    }));
  

    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoCreateComponent],
      providers: [{ provide: TodoService, useValue: mockTodoService }],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
