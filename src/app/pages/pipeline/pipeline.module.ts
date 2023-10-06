import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline.component';
import { PipelineRoutingModule } from './pipeline-routing.module';

@NgModule({
  declarations: [PipelineComponent],
  imports: [SharedModule, PipelineRoutingModule, CommonModule],
})
export class PipelineModule {}
