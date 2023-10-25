import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description?: string;
  @Input() footer?: string;
  @Input() classes?: string = '';
  @Output() onClick = new EventEmitter<any>();

  handleClick() {
    this.onClick.emit();
  }

}
