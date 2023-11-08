import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';
import { faArrowLeft, faXmark, faChevronRight, faChevronDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-final-settings',
  templateUrl: './final-settings.component.html',
  styleUrls: ['./final-settings.component.scss']
})
export class FinalSettingsComponent {
  protected readonly constants = constants;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faCircleInfo = faCircleInfo;

  autoMappingChecked = false;
  replicateFieldsChecked = false;

  constructor(
    private router: Router,
  ) {}

  finalSettingsFormGroup = new FormGroup({
    tablePrefix: new FormControl('', Validators.required),
  });

  navigateToPreviousPage() {
    this.router.navigateByUrl('/configure-destination');
  }

  // TODO: Implement cancel process
  cancelProcess() {
    this.router.navigateByUrl('/');
  }

  setAutoMapping(value: boolean) {
    this.autoMappingChecked = value;
  }

  setReplicateFields(value: boolean) {
    this.replicateFieldsChecked = value;
  }

  /**
   * TODO: Save all settings and data from previous steps
   * and redirect to new created pipeline dashboard
  */
  continueToNextPage() {
    // TODO: Change url to pipeline's dashboard
    // this.router.navigateByUrl('/');
    const tablePrefix = this.finalSettingsFormGroup.get('tablePrefix')?.value;
  }
}
