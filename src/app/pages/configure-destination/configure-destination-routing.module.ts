import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ConfigureDestinationComponent} from "./configure-destination.component";

const routes: Routes = [
  {
    path: '',
    component: ConfigureDestinationComponent,
    title: 'Configure Destination'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigureDestinationRoutingModule {}
