import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { CreatePipeline } from 'src/app/pages/pipeline/models/Pipeline';
import { PipelineService } from 'src/app/pages/pipeline/services/pipeline/pipeline.service';
import { constants } from '../../../../utils/app.constants';

@Component({
  selector: 'app-create-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss'],
  providers: [PipelineService],
})
export class CreatePipelineComponent {
  faXmark = faXmark;
  CONSTANTS = constants;
  pipelineNameError: string = '';
  isRunning: boolean = false;

  constructor(
    private pipelineService: PipelineService,
    public dialogRef: DialogRef<string>,
    private authService: AuthService
  ) {}

  createPipelineGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  get showPipelineNameErrorMessage(): boolean {
    if (
      this.createPipelineGroup.controls.name.invalid &&
      this.createPipelineGroup.controls.name.touched &&
      this.createPipelineGroup.controls.name.pristine
    ) {
      this.pipelineNameError = 'Please enter Pipeline name';
      return true;
    }
    return false;
  }

  closePopup() {
    this.dialogRef.close();
  }

  handleCreatePipeline() {
    this.isRunning = true;
    const newPipeline: CreatePipeline = {
      name: this.createPipelineGroup.controls.name!.value!,
      organizationId: this.authService.getOrganizationId()!,
      description: this.createPipelineGroup.controls.description!.value!,
      teamId: this.authService.getTeamId()!,
    };
    this.pipelineService.createPipeline(newPipeline).subscribe({
      next: () => {
        this.isRunning = false;
        this.dialogRef.close('success');
      },
      error: () => {
        this.isRunning = false;
      },
    });
  }
}
