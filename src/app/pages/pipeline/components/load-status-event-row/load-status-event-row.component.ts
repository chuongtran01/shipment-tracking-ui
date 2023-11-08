import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { LoadStatusEventProps } from 'src/app/pages/pipeline/models/LoadStatus';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-load-status-event-row',
  templateUrl: './load-status-event-row.component.html',
  styleUrls: ['./load-status-event-row.component.scss']
})
export class LoadStatusEventRowComponent {

  @Input() eventTitle: string = '';
  @Input() totalEventNumber: number = 0;
  @Input() eventTypeNumber: number = 0;
  @Input() events: LoadStatusEventProps[] = [];

  constants = constants;
  isCollapsed: boolean = true;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  changeCollapseState() {
    this.isCollapsed = !this.isCollapsed;
  }

  rerunEvent() {
    // TODO: Implement skipping selected event
  };

  skipEvent() {
    // TODO: Implement rerunning selected event
  };

  viewEventSample() {
    // TODO: Implement viewing sample of selected event
  };
}
