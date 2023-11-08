import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent, ForgotPasswordComponent],
  imports: [SharedModule, AuthRoutingModule, CommonModule],
})
export class AuthModule {}
