import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input({ required: true }) placeholder!: string;

  @Output() onChange = new EventEmitter<string>();

  faMagnifyingGlass = faMagnifyingGlass;

  handleInputChange($event: Event) {
    const searchText: string = ($event.target as HTMLInputElement).value;
    this.onChange.emit(searchText);
  }
}
