import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline.component';
import { ConfigureJobComponent } from './configure-job/configure-job.component';
import { FinalSettingsComponent } from './final-settings/final-settings.component';
import { PipelinePageComponent } from './pipeline-page/pipeline-page.component';
import { PipelineHeaderComponent } from 'src/app/components/pipeline-header/pipeline-header.component';
import { PipelineBodyComponent } from 'src/app/components/pipeline-body/pipeline-body.component';
import { CreatePipelineComponent } from 'src/app/components/create-pipeline/create-pipeline.component';
import { LoadStatusEventsDropdownComponent } from 'src/app/components/load-status-events-dropdown/load-status-events-dropdown.component';
import { LoadStatusEventRowComponent } from 'src/app/components/load-status-event-row/load-status-event-row.component';
import { LoadStatusFilterComponent } from 'src/app/components/load-status-filter/load-status-filter.component';
import { OverviewComponent } from './overview/overview.component';
import { LoadStatusComponent } from './load-status/load-status.component';

@NgModule({
  declarations: [
    PipelineComponent,
    PipelinePageComponent,
    PipelineHeaderComponent,
    PipelineBodyComponent,
    ConfigureJobComponent,
    FinalSettingsComponent,
    CreatePipelineComponent,
    LoadStatusEventsDropdownComponent,
    LoadStatusEventRowComponent,
    LoadStatusFilterComponent,
    OverviewComponent,
    LoadStatusComponent,
  ],
  imports: [SharedModule, PipelineRoutingModule, CommonModule],
})
export class PipelineModule {}
