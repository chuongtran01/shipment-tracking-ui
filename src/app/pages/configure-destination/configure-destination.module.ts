import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ConfigureDestinationComponent } from './configure-destination.component';
import { ConfigureDestinationRoutingModule } from './configure-destination-routing.module';

@NgModule({
  declarations: [
    ConfigureDestinationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConfigureDestinationRoutingModule,
  ]
})
export class ConfigureDestinationModule { }
