import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    SharedModule,
    ForgotPasswordRoutingModule,
  ]
})
export class ForgotPasswordModule { }
