import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Todo}           from "../core/todo-sdk/todo-sdk.service";
import {TodoActions}     from "../todo/todo.component";
import {
  TodoService
} from "../core/services/todo-service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.todos.subscribe(
      (todos) => {
        console.log(todos)
        this.todos = todos
      }
    )
  }

  ngOnInit(): void {
    this.todoService.todoEvent.emit({ type: TodoActions.GetAll });
  }

  ngOnDestroy() {
    this.todoService.todos.unsubscribe();
  }
}
