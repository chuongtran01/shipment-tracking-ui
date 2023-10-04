import { NgModule } from '@angular/core';
import { SourceSelectionComponent } from './source-selection.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SourceSelectionRoutingModule } from './source-selection-routing.module';
import { NgForOf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SourceSelectionComponent,
  ],
  imports: [
    SharedModule,
    SourceSelectionRoutingModule,
    NgForOf,
    FontAwesomeModule,
  ]
})
export class SourceSelectionModule { }
