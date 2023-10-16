import { Component, Input } from '@angular/core';
import { faCircle, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { IPipeline } from 'src/app/models/Pipeline';

@Component({
  selector: 'app-pipeline-body',
  templateUrl: './pipeline-body.component.html',
  styleUrls: ['./pipeline-body.component.scss'],
})
export class PipelineBodyComponent {
  @Input({ required: true }) pipeline!: IPipeline;

  faCircle = faCircle;
  faCirclePause = faCirclePause;
}
