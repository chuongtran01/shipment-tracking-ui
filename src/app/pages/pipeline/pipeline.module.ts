import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline.component';
import { ConfigureDestinationComponent } from './configure-destination/configure-destination.component';
import { FinalSettingsComponent } from './final-settings/final-settings.component';
import { PipelinePageComponent } from './pipeline-page/pipeline-page.component';

@NgModule({
  declarations: [
    PipelineComponent,
    PipelinePageComponent,
    ConfigureDestinationComponent,
    FinalSettingsComponent,
  ],
  imports: [SharedModule, PipelineRoutingModule, CommonModule],
})
export class PipelineModule {}
