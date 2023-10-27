import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceSelectionComponent } from './source-selection/source-selection.component';
import { ConfigureSourceComponent } from './configure-source/configure-source.component';
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
    component: ConfigureSourceComponent,
    title: 'Configure Source',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionRoutingModule {}
