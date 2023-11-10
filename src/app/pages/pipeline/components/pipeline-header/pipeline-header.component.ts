import { Component, EventEmitter, Output } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { constants } from '../../../../utils/app.constants';

@Component({
  selector: 'app-pipeline-header',
  templateUrl: './pipeline-header.component.html',
  styleUrls: ['./pipeline-header.component.scss'],
})
export class PipelineHeaderComponent {
  protected readonly CONSTANTS = constants;
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faFilter = faFilter;
  @Output() openPopupEvent = new EventEmitter<boolean>();

  openPopup() {
    this.openPopupEvent.emit(true);
  }
}
