import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelinePageComponent } from './pipeline-page/pipeline-page.component';
import { ConfigureDestinationComponent } from './configure-destination/configure-destination.component';
import { FinalSettingsComponent } from './final-settings/final-settings.component';

const routes: Routes = [
  {
    path: '',
    component: PipelinePageComponent,
    title: 'Pipeline Page',
  },
  {
    path: 'configure-destination',
    component: ConfigureDestinationComponent,
    title: 'Configure Destination',
  },
  {
    path: 'final-settings',
    component: FinalSettingsComponent,
    title: 'Final Settings',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipelineRoutingModule {}
