import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoCreateComponent } from './todo-create.component';

describe('TodoCreateComponent', () => {
  let component: TodoCreateComponent;
  let fixture: ComponentFixture<TodoCreateComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoCreateComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormBuilder]
    }).compileComponents();
    formBuilder = TestBed.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a form with title and description controls', () => {
    expect(component.todoForm.contains('title')).toBe(true);
    expect(component.todoForm.contains('description')).toBe(true);
  });

  it('should make title control required', () => {
    const control = component.todoForm.get('title');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('Test');
    expect(control?.valid).toBeTruthy();
  });
});
