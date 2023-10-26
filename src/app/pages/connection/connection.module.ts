import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';
import { SourceSelectionComponent } from './source-selection/source-selection.component';
import { ConfigureConnectionComponent } from './configure-connection/configure-connection.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';

@NgModule({
  declarations: [
    ConnectionComponent,
    SourceSelectionComponent,
    ConfigureConnectionComponent,
    ConnectionPageComponent,
  ],
  imports: [SharedModule, ConnectionRoutingModule, CommonModule],
})
export class ConnectionModule {}
