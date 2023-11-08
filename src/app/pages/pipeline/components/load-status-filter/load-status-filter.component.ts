import { Component } from '@angular/core';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-load-status-filter',
  templateUrl: './load-status-filter.component.html',
  styleUrls: ['./load-status-filter.component.scss']
})
export class LoadStatusFilterComponent {

  constants = constants;
  stageFilters = constants.loadStatus.stageFilters;
  timeFilters = constants.loadStatus.timeFilters;
  activeStageFilter = this.stageFilters[0];
  activeTimeFilter = this.timeFilters[0];

  setActiveTimeFilter(time: string) {
    this.activeTimeFilter = time;
  }

  setActiveStageFilter(stage: string) {
    this.activeStageFilter = stage;
  }

}
