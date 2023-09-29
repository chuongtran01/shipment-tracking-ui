import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() name: string = '';
  @Input() isChecked : boolean = false;
  @Output() onChange = new EventEmitter<boolean>();

  checkboxChanged(value: boolean) {
    this.isChecked = value;
    this.onChange.emit(value);
  }
}
