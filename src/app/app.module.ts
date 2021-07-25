import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { AppComponent }      from './app.component';
import { HeaderComponent }   from './header/header.component';
import { ButtonComponent }   from './button/button.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent }     from './todo/todo.component';
import { HttpClientModule }  from "@angular/common/http";
import {TodoSdkModule}       from "./core/todo-sdk/todo-sdk.module";
import { CssVariablePipe }   from './core/pipes/css-variable.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TodoListComponent,
    TodoComponent,
    CssVariablePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoSdkModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
