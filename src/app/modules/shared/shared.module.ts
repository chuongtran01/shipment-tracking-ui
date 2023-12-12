import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from '@angular/cdk/dialog';
import { ButtonComponent } from 'src/app/components/button/button.component';

const COMPONENTS_FOR_EXPORT = [ButtonComponent];

const MODULES_FOR_EXPORT = [
  ReactiveFormsModule,
  FormsModule,
  FontAwesomeModule,
  ToastModule,
  DialogModule,
];

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
