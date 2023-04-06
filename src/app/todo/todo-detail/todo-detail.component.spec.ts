import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoDetailComponent } from './todo-detail.component';
import { Todo } from '../model/todo';
import { CustomUppercasePipe } from '../../custom-uppercase.pipe';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailComponent, CustomUppercasePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    component.todo = {
      title: 'My first todo',
      description: 'This is my first todo'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the todo title', () => {
    const titleElement = fixture.nativeElement.querySelector('#todo-title');
    expect(titleElement.textContent).contain(component.todo.title);
  });

  it('should emit the deleteTodo event on button click', () => {
    const deleteButton = fixture.nativeElement.querySelector('#delete-button');
    jest.spyOn(component.removeTodo, 'emit');
    deleteButton.click();
    expect(component.removeTodo.emit).();
  });
});
