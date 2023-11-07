import { Component, Input } from '@angular/core';
import { faCircle, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { Pipeline } from 'src/app/pages/pipeline/models/Pipeline';

@Component({
  selector: 'app-pipeline-dashboard-information',
  templateUrl: './pipeline-dashboard-information.component.html',
  styleUrls: ['./pipeline-dashboard-information.component.scss'],
})
export class PipelineDashboardInformationComponent {
  @Input({ required: true }) pipeline: Pipeline = {
    id: '',
    createdAt: 0,
    name: '',
    teamId: '',
    description: '',
    organizationId: '',
  };

  faCircle = faCircle;
  faCirclePause = faCirclePause;
}
