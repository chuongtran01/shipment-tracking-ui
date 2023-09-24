import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import {SharedModule} from "../../modules/shared/shared.module";
import {RegistrationRoutingModule} from "./registration-routing.module";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule {}
