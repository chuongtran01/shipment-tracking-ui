import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceSelectionComponent } from './source-selection/source-selection.component';
import { ConfigureConnectionComponent } from './configure-connection/configure-connection.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionPageComponent,
    title: 'Connections',
  },
  {
    path: 'select-source',
    component: SourceSelectionComponent,
    title: 'Select Source',
  },
  {
    path: 'configure-source',
    component: ConfigureConnectionComponent,
    title: 'Configure Source',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionRoutingModule {}
