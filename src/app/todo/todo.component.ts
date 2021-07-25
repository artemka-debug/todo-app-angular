import {
  Component,
  Input,
}                      from '@angular/core';
import {
  Todo,
} from "../core/todo-sdk/todo-sdk.service";
import {
  TodoService
} from "../core/services/todo-service/todo.service";

export enum TodoActions {
  Add    = 'post',
  Delete = 'delete',
  Get    = 'get',
  GetAll = 'getAll',
  Update = 'put'
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  deleteTodo() {
    this.todoService.todoEvent.emit({ type: TodoActions.Delete, data: { id: this.todo.id }});
  }

  markAsDone() {
    this.todoService.todoEvent.emit({
      type: TodoActions.Update,
      data: { id: this.todo.id, done: !this.todo.done }
    });
  }
}
