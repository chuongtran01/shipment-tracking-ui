import { Component, EventEmitter, Input, Output } from '@angular/core';
import { constants } from 'src/app/utils/app.constants';
import { faArrowLeft, faXmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-configuration-topbar',
  templateUrl: './configuration-topbar.component.html',
  styleUrls: ['./configuration-topbar.component.scss']
})
export class ConfigurationTopbarComponent {

  protected readonly constants = constants;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;
  faChevronRight = faChevronRight;

  @Input() currentStep : number = 1;
  @Output() onBackClicked = new EventEmitter<any>();
  @Output() onCancelClicked = new EventEmitter<any>();

  navigateToPreviousPage() {
    this.onBackClicked.emit();
  }

  cancelProcess() {
    this.onCancelClicked.emit();
  }

  getTopbarClasses(stepID : number) {
    if (this.currentStep < stepID) {
      return 'disabled';
    }
    if (this.currentStep > stepID) {
      return 'completed';
    }
    return '';
  }

}
