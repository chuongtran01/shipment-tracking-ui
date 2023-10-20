import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {

  @Input() name: string = '';
  @Input() isChecked: boolean = false;
  @Input() classes?: string;
  @Output() switchToggled = new EventEmitter<boolean>();

  onChange(value: boolean) {
    this.isChecked = value;
    this.switchToggled.emit(value);
  }
}
