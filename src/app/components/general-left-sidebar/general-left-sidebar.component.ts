import { Component } from '@angular/core';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { constants } from '../../utils/app.constants';

@Component({
  selector: 'app-general-left-sidebar',
  templateUrl: './general-left-sidebar.component.html',
  styleUrls: ['./general-left-sidebar.component.scss'],
})
export class GeneralLeftSidebarComponent {
  protected readonly CONSTANTS = constants;
  faAtom = faAtom;
}
