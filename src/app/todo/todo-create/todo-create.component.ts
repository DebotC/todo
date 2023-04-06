import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent {

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: [null, Validators.required],
      description: [null]
    });
  }
}
