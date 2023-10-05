import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ConfigureSourceComponent} from "./configure-source.component";

const routes: Routes = [
  {
    path: '',
    component: ConfigureSourceComponent,
    title: 'Configure Source'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigureSourceRoutingModule {}
