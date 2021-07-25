import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text?: string = '';
  @Input() type?: string;
  @Input() disabled: boolean = false;

  @HostBinding("style.--backgroundColor")
  @Input('color')
  backgroundColor: string = 'success';

  @HostBinding("style.--textColor")
  @Input()
  textColor: string = 'black';

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
