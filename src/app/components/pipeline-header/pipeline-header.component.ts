import { Component } from '@angular/core';
import {
  faPlus,
  faArrowUpWideShort,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { constants } from '../../utils/app.constants';

@Component({
  selector: 'app-pipeline-header',
  templateUrl: './pipeline-header.component.html',
  styleUrls: ['./pipeline-header.component.scss'],
})
export class PipelineHeaderComponent {
  protected readonly CONSTANTS = constants;
  faPlus = faPlus;
  faArrowUpWideShort = faArrowUpWideShort;
  faRotateRight = faRotateRight;
}
