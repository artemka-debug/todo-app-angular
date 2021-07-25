import {
  EventEmitter,
  Injectable,
}                                   from '@angular/core';
import {
  Todo,
  TodoSdkService
}                                   from "../../todo-sdk/todo-sdk.service";
import {TodoActions}                from "../../../todo/todo.component";
import {
  BehaviorSubject,
}                                   from "rxjs";
import {getDefinedValuesFromObject} from "../../utils/get-defined-values-from-object";

export type TodoEventType = { type: TodoActions, data?: any };

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoEvent = new EventEmitter<TodoEventType>();

  constructor(
    private todoSdk: TodoSdkService
  ) {
    this.todoEvent.subscribe(this.handleEvents.bind(this));
  }

  handleEvents(event: TodoEventType) {
    switch (event.type) {
      case TodoActions.Add:
        this.addTodo(event.data);
        break;
      case TodoActions.GetAll:
        this.getTodos();
        break
      case TodoActions.Delete:
        this.deleteTodo(event.data?.id);
        break;
      case TodoActions.Update:
        this.updateTodo(event.data);
        break;
    }
  }

  updateTodo(data?: { id: string } & Omit<Partial<Todo>, 'id'>) {
    if (!data) {
      throw new Error('Data was not provided to update todo');
    }
    const updateObject = getDefinedValuesFromObject(data);
    this.todoSdk.put(`/${data.id}`, updateObject).subscribe(
      () => {
        return this.todos.next(this.todos.getValue().map((todo) => {
          if (todo.id === data.id) {
            return {
              ...todo,
              ...updateObject,
            };
          }

          return todo;
        }));
      },
      error => alert('Could not update todo, try to reload page')
    )
  }

  getTodos() {
    this.todoSdk.get('/').subscribe(
      (response) => {
        this.todos.next(response);
      }
    )
  }

  deleteTodo(id?: string) {
    if (!id) {
      throw new Error('Id was not provided to delete todo');
    }
    this.todoSdk.delete(`/${id}`).subscribe(
      () => {
        this.todos.next(this.todos.getValue().filter((todo) => todo.id !== id))
      },
      error => alert('Could not delete todo, try to reload page')
    )
  }

  addTodo(data?: { title: string; description: string }) {
    if (!data) {
      throw new Error('Data was not provided to add todo');
    }
    this.todoSdk.post('/', data).subscribe(
      (newTodo) => {
        this.todos.next([newTodo, ...this.todos.getValue()])
      },
      error => alert('Could not add todo, try to reload page')
    )
  }
}
