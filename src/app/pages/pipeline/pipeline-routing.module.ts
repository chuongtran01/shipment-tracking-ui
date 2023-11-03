import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelinePageComponent } from './pipeline-page/pipeline-page.component';
import { ConfigureJobComponent } from './configure-job/configure-job.component';
import { FinalSettingsComponent } from './final-settings/final-settings.component';
import { OverviewComponent } from './overview/overview.component';
import { LoadStatusComponent } from './load-status/load-status.component';

const routes: Routes = [
  {
    path: '',
    component: PipelinePageComponent,
    title: 'Pipeline Page',
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: OverviewComponent,
        title: 'Overview',
      },
      {
        path: 'load-status',
        component: LoadStatusComponent,
        title: 'Load Status',
      },
      {
        path: 'job-source',
        component: ConfigureJobComponent,
        title: 'Configure Destination',
        data: {
          selectType: 'source',
        }
      },
      {
        path: 'job-destination/:connectionId/:jobName',
        component: ConfigureJobComponent,
        title: 'Configure Destination',
        data: {
          selectType: 'destination',
        }
      },
    ]
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
