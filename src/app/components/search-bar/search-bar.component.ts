import { Component, Input } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input({ required: true }) placeholder!: string;
  @Input() classes?: string;

  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private searchBarService: SearchBarService) {}

  sendSearchInput(event: any) {
    const inputValue = event.target.value;
    this.searchBarService.sendSearchInput(inputValue);
  }
}
