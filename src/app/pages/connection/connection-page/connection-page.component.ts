import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFilter, faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { ConnectionResponse } from 'src/app/models/Connection';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { ConnectionTypeImageMapper } from 'src/app/utils/ConnectionTypeImageMapper';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent {
  protected readonly constants = constants;
  faPlus = faPlus;
  faFilter = faFilter;
  faRotateRight = faRotateRight;
  connections: ConnectionResponse[] = [];

  constructor(
    private router: Router,
    private connectionService: ConnectionService,
  ) {
    this.refreshConnections();
  }

  navigateToSelectConnection() {
    this.router.navigateByUrl('/connection/select-source')
  }

  // TODO: Implement filtering connections
  filterConnections() {}

  refreshConnections() {
    // TODO: Change team id to the logged in user's team id
    const teamId = 1;
    this.connectionService.getAllConnections(teamId).subscribe(data => this.connections = data);
  }

  getConnectionImage(connectionTypeName: string) {
    return ConnectionTypeImageMapper.getImageRoute(connectionTypeName);
  }

  getDate(timestamp: string) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }
}
