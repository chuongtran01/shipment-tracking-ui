import { Component, Input } from '@angular/core';
import { faEllipsis, faGripVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schema-mapper-transformation-row',
  templateUrl: './schema-mapper-transformation-row.component.html',
  styleUrls: ['./schema-mapper-transformation-row.component.scss']
})
export class SchemaMapperTransformationRowComponent {
  faEllipsis = faEllipsis;
  faGripVertical = faGripVertical;

  @Input({required: true}) mapperId: string = '';
  @Input() transformationName: string = '';
  @Input() status: 'active' | 'queued' = 'active';
  @Input() date: string = '';
}
