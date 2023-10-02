import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {

  @Input() name: string = '';
  @Input({required: true}) value: string = '';
  @Input() isChecked: boolean = false;
  @Output() onChange = new EventEmitter<string>();

  radioChanged(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const value = (event.target as HTMLInputElement).value;
    this.isChecked = isChecked;
    this.onChange.emit(value);
  }

}