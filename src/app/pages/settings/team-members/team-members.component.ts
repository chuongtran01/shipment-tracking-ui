import { Component } from '@angular/core';
import { faEllipsisH, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ITeam } from 'src/app/models/Team';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent {

  faEllipsisH = faEllipsisH;
  faEllipsisV = faEllipsisV;
  constants = constants;

  teams: ITeam[] = [
    {
      id: '1',
      name: 'Team 1',
    },
    {
      id: '2',
      name: 'ADS Team',
    },
    {
      id: '3',
      name: 'XRP Team',
    },
  ];

}
