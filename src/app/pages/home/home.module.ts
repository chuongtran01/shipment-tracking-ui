import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [HomeComponent, LandingPageComponent],
  imports: [SharedModule, HomeRoutingModule, CommonModule],
})
export class HomeModule {}
