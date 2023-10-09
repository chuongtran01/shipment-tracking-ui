import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FinalSettingsComponent} from "./final-settings.component";

const routes: Routes = [
  {
    path: '',
    component: FinalSettingsComponent,
    title: 'Final Settings'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalSettingsRoutingModule {}
