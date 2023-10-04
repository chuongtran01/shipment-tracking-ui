import { ButtonComponent } from '../../components/button/button.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToggleSwitchComponent } from 'src/app/components/toggle-switch/toggle-switch.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { RadioButtonComponent } from 'src/app/components/radio-button/radio-button.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

const COMPONENTS_FOR_EXPORT = [
  ButtonComponent,
  ToggleSwitchComponent,
  SearchBarComponent,
  CheckboxComponent,
  RadioButtonComponent,
  ProductCardComponent,
];

const MODULES_FOR_EXPORT = [ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [...COMPONENTS_FOR_EXPORT],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    ...MODULES_FOR_EXPORT,
  ],
  exports: [...COMPONENTS_FOR_EXPORT, ...MODULES_FOR_EXPORT],
})
export class SharedModule {}
