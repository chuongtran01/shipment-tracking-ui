import {ButtonComponent} from "../../components/button/button.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const COMPONENTS_FOR_EXPORT = [
  ButtonComponent
];

const MODULES_FOR_EXPORT = [
  ReactiveFormsModule,
  FormsModule
];

@NgModule({
  declarations: [...COMPONENTS_FOR_EXPORT],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ...MODULES_FOR_EXPORT
  ],
  exports: [
    ...COMPONENTS_FOR_EXPORT,
    ...MODULES_FOR_EXPORT
  ]
})
export class SharedModule {}
