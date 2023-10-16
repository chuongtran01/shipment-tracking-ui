import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { constants } from '../../utils/app.constants';

@Component({
  selector: 'app-create-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss'],
})
export class CreatePipelineComponent {
  @Input({ required: true }) showCreatePipelineModal!: boolean;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  faXmark = faXmark;
  CONSTANTS = constants;
  pipelineNameError: string = '';

  createPipelineGroup = new FormGroup({
    pipelineName: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  get showPipelineNameErrorMessage(): boolean {
    if (
      this.createPipelineGroup.controls.pipelineName.invalid &&
      this.createPipelineGroup.controls.pipelineName.touched
    ) {
      this.pipelineNameError = 'Please enter Pipeline name';
      return true;
    }
    return false;
  }

  closePopup() {
    this.closeModalEvent.emit(!this.showCreatePipelineModal);
    this.createPipelineGroup.reset();
  }

  createPipeline() {
    // TODO: POST request to API
  }
}
