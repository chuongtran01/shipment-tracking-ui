import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline.component';
import { ConfigureDestinationComponent } from './configure-destination/configure-destination.component';
import { FinalSettingsComponent } from './final-settings/final-settings.component';
import { PipelinePageComponent } from './pipeline-page/pipeline-page.component';
import { PipelineHeaderComponent } from 'src/app/components/pipeline-header/pipeline-header.component';
import { PipelineBodyComponent } from 'src/app/components/pipeline-body/pipeline-body.component';
import { CreatePipelineComponent } from 'src/app/components/create-pipeline/create-pipeline.component';

@NgModule({
  declarations: [
    PipelineComponent,
    PipelinePageComponent,
    PipelineHeaderComponent,
    PipelineBodyComponent,
    ConfigureDestinationComponent,
    FinalSettingsComponent,
    CreatePipelineComponent,
  ],
  imports: [SharedModule, PipelineRoutingModule, CommonModule],
})
export class PipelineModule {}
