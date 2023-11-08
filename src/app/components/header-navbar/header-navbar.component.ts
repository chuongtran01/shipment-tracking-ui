import { Component, Input } from '@angular/core';
import {
  faBell,
  faCircle,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { ITeam, ITeamSetting } from 'src/app/models/Team';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
})
export class HeaderNavbarComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) teams!: ITeam[];

  faBell = faBell;
  faCircle = faCircle;
  faEllipsis = faEllipsis;

  isTeamDropdownSettingsOpen: boolean = false;
  isTeamDropdownOpen: boolean = false;

  currentChoosenTeam: string = '1';

  teamSettings: ITeamSetting[] = [
    {
      id: '1',
      title: 'Team Settings',
      navigate: '/settings/team/members',
    },
    {
      id: '2',
      title: 'Join Team',
      navigate: 'join-team',
    },
    {
      id: '3',
      title: 'Create Team',
      navigate: 'create-team',
    },
  ];

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
}
