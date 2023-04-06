import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomUppercasePipe } from '../custom-uppercase.pipe';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailComponent,
    TodoCreateComponent,
    CustomUppercasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoListComponent,
    TodoDetailComponent
  ]
})
export class TodoModule { }
