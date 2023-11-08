import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';
import { SourceSelectionComponent } from './pages/source-selection/source-selection.component';
import { ConfigureConnectionComponent } from './pages/configure-connection/configure-connection.component';
import { ConnectionPageComponent } from './pages/connection-page/connection-page.component';
import { ConnectionService } from './services/connection/connection.service';

@NgModule({
  declarations: [
    ConnectionComponent,
    SourceSelectionComponent,
    ConfigureConnectionComponent,
    ConnectionPageComponent,
  ],
  imports: [SharedModule, ConnectionRoutingModule, CommonModule],
  providers: [ConnectionService],
})
export class ConnectionModule {}
