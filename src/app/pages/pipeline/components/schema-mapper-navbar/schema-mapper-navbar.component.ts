import { Component } from '@angular/core';
import {
  faPlay,
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { constants } from '../../../../utils/app.constants';

@Component({
  selector: 'app-schema-mapper-navbar',
  templateUrl: './schema-mapper-navbar.component.html',
  styleUrls: ['./schema-mapper-navbar.component.scss'],
})
export class SchemaMapperNavbarComponent {
  faPlay = faPlay;
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;

  CONSTANTS = constants;
}
