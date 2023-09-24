import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() isRunning: boolean = false;
  @Input() disabled: boolean = false;
  @Input() classes: string = '';

  onClick = () => {}

}
