import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-expanding-search-bar',
  templateUrl: './expanding-search-bar.component.html',
  styleUrls: ['./expanding-search-bar.component.scss']
})
export class ExpandingSearchBarComponent {
  @Input() classes?: string;

  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private searchBarService: SearchBarService) {}

  handleInputChange(event: any) {
    const inputValue = event.target.value;
    this.searchBarService.sendSearchInput(inputValue);
  }
}
