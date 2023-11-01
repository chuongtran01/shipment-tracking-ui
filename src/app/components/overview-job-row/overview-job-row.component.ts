import { Component, Input } from '@angular/core';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-overview-job-row',
  templateUrl: './overview-job-row.component.html',
  styleUrls: ['./overview-job-row.component.scss']
})
export class OverviewJobRowComponent {
  @Input() id: number | string | null = null;
  @Input() title: string = '';
  @Input() description?: string;
  @Input() alertMessage?: string;
  @Input() alertType?: "warning" | "failed";
  @Input() eventsIngested: string = "0";
  @Input() eventsNotLoaded?: string;
  @Input() jobStatus: "queued" | "active" | "failed" | "paused" = 'active';
  @Input() lastSyncedTime?: string;

  jobChecked: boolean = false;
  constants = constants;

  setJobChecked() {
    this.jobChecked = !this.jobChecked;
  }

}
