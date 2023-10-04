import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [SharedModule, CommonModule, RegistrationRoutingModule],
})
export class RegistrationModule {}
