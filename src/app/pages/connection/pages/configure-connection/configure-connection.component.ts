import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';
import { faArrowLeft, faXmark, faChevronRight, faChevronDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ConnectionService } from 'src/app/pages/connection/services/connection/connection.service';

@Component({
  selector: 'app-configure-connection',
  templateUrl: './configure-connection.component.html',
  styleUrls: ['./configure-connection.component.scss']
})
export class ConfigureConnectionComponent {

  protected readonly constants = constants;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  faCircleInfo = faCircleInfo;

  currentStep : number = 1;
  sshConnection : boolean = false;
  typeId: string = '';
  typeName: string = '';
  isContinueRunning = false;

  constructor(
    private router: Router,
    private connectionService: ConnectionService,
  ) {}

  ngOnInit() {
    this.typeId = history.state?.typeId;
    this.typeName = history.state?.typeName;
  }

  configureSourceFormGroup = new FormGroup({
    connectionName: new FormControl('', Validators.required),
    databaseHost: new FormControl('', [Validators.required]),
    databasePort: new FormControl('', [Validators.required]),
    databaseUser: new FormControl('', [Validators.required]),
    databasePassword: new FormControl('', [Validators.required]),
    databaseName: new FormControl('', [Validators.required]),
  });

  navigateToPreviousPage() {
    this.router.navigateByUrl('/connection/select-source');
  }

  cancelProcess() {
    this.router.navigateByUrl('/connection');
  }

  // TODO: Implement testing of source connection based on inputs
  testSourceConnection() {
    const connectionName = this.configureSourceFormGroup.get('connectionName')?.value;
    const databaseHost = this.configureSourceFormGroup.get('databaseHost')?.value;
    const databasePort = this.configureSourceFormGroup.get('databasePort')?.value;
    const databaseUser = this.configureSourceFormGroup.get('databaseUser')?.value;
    const databasePassword = this.configureSourceFormGroup.get('databasePassword')?.value;
    const databaseName = this.configureSourceFormGroup.get('databaseName')?.value;
  }

  // TODO: Change organizationId and teamId to be dynamic
  testAndContinue() {
    this.isContinueRunning = true;
    this.testSourceConnection(); // Testing could be done differently

    this.connectionService.addConnection({
      teamId: '1',
      connectionName: this.configureSourceFormGroup.value.connectionName as string,
      connectionTypeId: this.typeId,
      connectionTypeName: this.typeName,
      hostname: this.configureSourceFormGroup.value.databaseHost as string,
      port: this.configureSourceFormGroup.value.databasePort as unknown as number,
      username: this.configureSourceFormGroup.value.databaseUser as string,
      password: this.configureSourceFormGroup.value.databasePassword as string,
      databaseName: this.configureSourceFormGroup.value.databaseName as string,
      organizationId: "demo-org-1",
    }).subscribe({
      next: () => {
        this.router.navigateByUrl('/connection');
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.isContinueRunning = false;
      }
    });

  }

  sshConnectionToggled(value: boolean) {
    this.sshConnection = value;
  }

}
