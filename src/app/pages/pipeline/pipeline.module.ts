import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PipelinePageComponent } from './pipeline-page/pipeline-page.component';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PipelineComponent } from './pipeline.component';
import { ConfigureDestinationComponent } from './configure-destination/configure-destination.component';
import { FinalSettingsComponent } from './final-settings/final-settings.component';

@NgModule({
  declarations: [PipelineComponent, PipelinePageComponent, ConfigureDestinationComponent, FinalSettingsComponent],
  imports: [SharedModule, PipelineRoutingModule, CommonModule],
})
export class PipelineModule {}
