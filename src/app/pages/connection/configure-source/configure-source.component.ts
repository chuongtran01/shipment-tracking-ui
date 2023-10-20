import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';
import { faArrowLeft, faXmark, faChevronRight, faChevronDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-configure-source',
  templateUrl: './configure-source.component.html',
  styleUrls: ['./configure-source.component.scss']
})
export class ConfigureSourceComponent {

  protected readonly constants = constants;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faCircleInfo = faCircleInfo;

  currentStep : number = 1;
  sshConnection : boolean = false;

  constructor(
    private router: Router,
  ) {}

  configureSourceFormGroup = new FormGroup({
    pipelineName: new FormControl('', Validators.required),
    databaseHost: new FormControl('', [Validators.required]),
    databasePort: new FormControl('', [Validators.required]),
    databaseUser: new FormControl('', [Validators.required]),
    databasePassword: new FormControl('', [Validators.required]),
    databaseName: new FormControl('', [Validators.required]),
  });

  navigateToPreviousPage() {
    this.router.navigateByUrl('/select-source');
  }

  // TODO: Implement cancel process
  cancelProcess() {
    this.router.navigateByUrl('/');
  }

  // TODO: Implement testing of source connection based on inputs
  testSourceConnection() {
    const pipelineName = this.configureSourceFormGroup.get('pipelineName')?.value;
    const databaseHost = this.configureSourceFormGroup.get('databaseHost')?.value;
    const databasePort = this.configureSourceFormGroup.get('databasePort')?.value;
    const databaseUser = this.configureSourceFormGroup.get('databaseUser')?.value;
    const databasePassword = this.configureSourceFormGroup.get('databasePassword')?.value;
    const databaseName = this.configureSourceFormGroup.get('databaseName')?.value;
  }

  // TODO: Implement handling saving the database information through the process
  testAndContinue() {
    const pipelineName = this.configureSourceFormGroup.get('pipelineName')?.value;
    const databaseHost = this.configureSourceFormGroup.get('databaseHost')?.value;
    const databasePort = this.configureSourceFormGroup.get('databasePort')?.value;
    const databaseUser = this.configureSourceFormGroup.get('databaseUser')?.value;
    const databasePassword = this.configureSourceFormGroup.get('databasePassword')?.value;
    const databaseName = this.configureSourceFormGroup.get('databaseName')?.value;

    this.testSourceConnection(); // Testing could be done differently
    this.router.navigateByUrl('/configure-destination');
  }

  sshConnectionToggled(value: boolean) {
    this.sshConnection = value;
  }

}
