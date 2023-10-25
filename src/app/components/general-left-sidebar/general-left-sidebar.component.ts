import { Component } from '@angular/core';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { constants } from '../../utils/app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-left-sidebar',
  templateUrl: './general-left-sidebar.component.html',
  styleUrls: ['./general-left-sidebar.component.scss'],
})
export class GeneralLeftSidebarComponent {
  protected readonly CONSTANTS = constants;
  faAtom = faAtom;

  constructor(private router: Router) {}

  activeClass(name: string) {
    if (this.router.url === name) {
      return 'sidebar-option-active';
    } else {
      return '';
    }
  }
}
