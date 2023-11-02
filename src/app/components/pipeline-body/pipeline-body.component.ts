import { Component, Input } from '@angular/core';
import { faCircle, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { Pipeline } from 'src/app/models/Pipeline';

@Component({
  selector: 'app-pipeline-body',
  templateUrl: './pipeline-body.component.html',
  styleUrls: ['./pipeline-body.component.scss'],
})
export class PipelineBodyComponent {
  @Input({ required: true }) pipeline!: Pipeline;

  faCircle = faCircle;
  faCirclePause = faCirclePause;
}
