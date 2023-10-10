import { Component, Input } from '@angular/core';
import { faArrowRotateRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { LoadStatusEventProps } from 'src/app/models/LoadStatus';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-load-status-events-dropdown',
  templateUrl: './load-status-events-dropdown.component.html',
  styleUrls: ['./load-status-events-dropdown.component.scss']
})
export class LoadStatusEventsDropdownComponent {

  @Input({required: true}) totalEvents: number = 0;

  constants = constants;
  faArrowRotateRight = faArrowRotateRight;
  faEllipsisVertical = faEllipsisVertical;
  searchValue: string = '';
  events : LoadStatusEventProps[] = []; // TODO: data should be fetched from backend

  skipAllEvents() {
    // TODO: Implement skipping all events listed
  };

  rerunAllEvents() {
    // TODO: Implement rerunning all events listed
  };

  refresh() {
    // TODO: Implement refreshing events found
  };

  handleSearchChange(value: string) {
    this.searchValue = value;
    // TODO: handle results shown when search input changes
  };


}
