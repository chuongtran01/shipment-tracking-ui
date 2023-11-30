import { Component, Input } from '@angular/core';
import { faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-schema-mapper-transformation-modal',
  templateUrl: './schema-mapper-transformation-modal.component.html',
  styleUrls: ['./schema-mapper-transformation-modal.component.scss'],
})
export class SchemaMapperTransformationModalComponent {
  @Input({ required: true }) showModal!: boolean;

  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;

  CONSTANTS = constants;
}
