import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ConfigureSourceRoutingModule } from './configure-source-routing.module';
import { ConfigureSourceComponent } from './configure-source.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ConfigureSourceComponent
  ],
  imports: [
    SharedModule,
    ConfigureSourceRoutingModule,
    CommonModule,
  ]
})
export class ConfigureSourceModule { }
