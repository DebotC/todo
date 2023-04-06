import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListReadComponent } from './todo/todo-list-read/todo-list-read.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    TodoListReadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
