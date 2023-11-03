import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faBell,
  faCircle,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { Team, TeamSetting } from 'src/app/models/Team';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
})
export class HeaderNavbarComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) teams!: Team[];
  @Output() createTeamEvent = new EventEmitter();

  faBell = faBell;
  faCircle = faCircle;
  faEllipsis = faEllipsis;

  isTeamDropdownSettingsOpen: boolean = false;
  isTeamDropdownOpen: boolean = false;

  currentChoosenTeam: string = '1';

  handleTeamDropDown() {
    if (this.isTeamDropdownSettingsOpen) {
      this.isTeamDropdownSettingsOpen = false;
    }
    this.isTeamDropdownOpen = !this.isTeamDropdownOpen;
  }

  handleTeamSettingsDropDown() {
    if (this.isTeamDropdownOpen) {
      this.isTeamDropdownOpen = false;
    }
    this.isTeamDropdownSettingsOpen = !this.isTeamDropdownSettingsOpen;
  }

  handleCreateTeam() {
    this.createTeamEvent.emit();
  }
}
