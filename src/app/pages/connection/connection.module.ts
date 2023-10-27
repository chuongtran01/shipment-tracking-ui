import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';
import { SourceSelectionComponent } from './source-selection/source-selection.component';
import { ConfigureSourceComponent } from './configure-source/configure-source.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';

@NgModule({
  declarations: [
    ConnectionComponent,
    SourceSelectionComponent,
    ConfigureSourceComponent,
    ConnectionPageComponent,
  ],
  imports: [SharedModule, ConnectionRoutingModule, CommonModule],
})
export class ConnectionModule {}
