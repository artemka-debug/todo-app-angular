import {
  Component,
}                    from '@angular/core';
import {TodoActions} from "../todo/todo.component";
import {TodoService} from "../core/services/todo-service/todo.service";
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  appName = 'Todo App'
  showAddTodoForm = false;

  todoForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
  })

  constructor(
    private todoService: TodoService
  ) { }

  showFormToggle() {
    this.showAddTodoForm = !this.showAddTodoForm;
  }

  handleAddTodo() {
    const { title, description } = this.todoForm.controls;

    this.todoService.todoEvent.emit({
      type: TodoActions.Add,
      data: {
        title: title.value,
        description: description.value
      }
    });
    this.showFormToggle();
    this.todoForm.reset();
  }
}
