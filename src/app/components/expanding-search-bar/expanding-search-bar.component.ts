import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expanding-search-bar',
  templateUrl: './expanding-search-bar.component.html',
  styleUrls: ['./expanding-search-bar.component.scss']
})
export class ExpandingSearchBarComponent {
  @Input() classes?: string;
  @Output() onChange = new EventEmitter<string>();

  faMagnifyingGlass = faMagnifyingGlass;

  handleInputChange($event: Event) {
    const searchText: string = ($event.target as HTMLInputElement).value;
    this.onChange.emit(searchText);
  }
}
