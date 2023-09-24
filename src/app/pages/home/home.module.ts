import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../modules/shared/shared.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgForOf
  ]
})
export class HomeModule {}
