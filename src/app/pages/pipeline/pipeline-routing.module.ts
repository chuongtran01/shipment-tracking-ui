import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemaMapperComponent } from './pages/schema-mapper/schema-mapper.component';
import { PipelinePageComponent } from './pages/pipeline-page/pipeline-page.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { LoadStatusComponent } from './pages/load-status/load-status.component';
import { ConfigureJobComponent } from './pages/configure-job/configure-job.component';
import { FinalSettingsComponent } from './pages/final-settings/final-settings.component';

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
        path: 'schema-mapper',
        component: SchemaMapperComponent,
        title: 'Schema Mapper',
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
