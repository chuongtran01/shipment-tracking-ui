import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline.component';
import { ConfigureJobComponent } from './pages/configure-job/configure-job.component';
import { FinalSettingsComponent } from './pages/final-settings/final-settings.component';
import { PipelinePageComponent } from './pages/pipeline-page/pipeline-page.component';
import { PipelineHeaderComponent } from 'src/app/pages/pipeline/components/pipeline-header/pipeline-header.component';
import { PipelineBodyComponent } from 'src/app/pages/pipeline/components/pipeline-body/pipeline-body.component';
import { CreatePipelineComponent } from 'src/app/pages/pipeline/components/create-pipeline/create-pipeline.component';
import { LoadStatusEventsDropdownComponent } from 'src/app/pages/pipeline/components/load-status-events-dropdown/load-status-events-dropdown.component';
import { LoadStatusEventRowComponent } from 'src/app/pages/pipeline/components/load-status-event-row/load-status-event-row.component';
import { LoadStatusFilterComponent } from 'src/app/pages/pipeline/components/load-status-filter/load-status-filter.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { LoadStatusComponent } from './pages/load-status/load-status.component';
import { SchemaMapperCreateTableComponent } from './components/schema-mapper-create-table/schema-mapper-create-table.component';
import { SchemaMapperRowComponent } from './components/schema-mapper-row/schema-mapper-row.component';
import { SchemaMapperTableComponent } from './components/schema-mapper-table/schema-mapper-table.component';
import { OverviewJobRowComponent } from 'src/app/pages/pipeline/components/overview-job-row/overview-job-row.component';
import { PipelineService } from './services/pipeline/pipeline.service';
import { JobService } from './services/job/job.service';
import { ConnectionService } from '../connection/services/connection/connection.service';
import { SchemaMapperComponent } from './schema-mapper/schema-mapper.component';
import { CreateTeamComponent } from 'src/app/pages/pipeline/components/create-team/create-team.component';
import { PipelineDashboardInformationComponent } from 'src/app/pages/pipeline/components/pipeline-dashboard-information/pipeline-dashboard-information.component';
import { PipelineDashboardNavbarComponent } from './components/pipeline-dashboard-navbar/pipeline-dashboard-navbar.component';

const PIPELINE_COMPONENTS = [
  PipelineHeaderComponent,
  PipelineBodyComponent,
  CreatePipelineComponent,
  LoadStatusEventsDropdownComponent,
  LoadStatusEventRowComponent,
  LoadStatusFilterComponent,
  SchemaMapperRowComponent,
  SchemaMapperTableComponent,
  SchemaMapperCreateTableComponent,
  OverviewJobRowComponent,
  CreateTeamComponent,
  PipelineDashboardInformationComponent,
  PipelineDashboardNavbarComponent,
];

@NgModule({
  declarations: [
    ...PIPELINE_COMPONENTS,
    PipelineComponent,
    PipelinePageComponent,
    ConfigureJobComponent,
    OverviewComponent,
    LoadStatusComponent,
    FinalSettingsComponent,
    SchemaMapperComponent,
  ],
  imports: [SharedModule, PipelineRoutingModule, CommonModule],
  providers: [PipelineService, JobService, ConnectionService],
})
export class PipelineModule {}
