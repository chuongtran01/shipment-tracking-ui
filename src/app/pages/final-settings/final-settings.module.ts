import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FinalSettingsComponent } from './final-settings.component';
import { FinalSettingsRoutingModule } from './final-settings-routing.module';

@NgModule({
  declarations: [FinalSettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinalSettingsRoutingModule,
  ]
})
export class FinalSettingsModule { }
