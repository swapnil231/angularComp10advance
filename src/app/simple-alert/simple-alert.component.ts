import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.scss'],
})
export class SimpleAlertComponent {
  constructor() {}
  @Output() ondismiss: EventEmitter<void> = new EventEmitter<void>();
  @Input() title = '';
  @Input() message = '';

  visible = true;
  show() {
    this.visible = false;
  }

  dismiss() {
    this.ondismiss.emit();
    this.visible = true;
  }
}
