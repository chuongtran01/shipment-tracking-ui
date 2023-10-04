import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SourceSelectionComponent} from "./source-selection.component";

const routes: Routes = [
  {
    path: '',
    component: SourceSelectionComponent,
    title: 'Source Selection'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceSelectionRoutingModule {}
