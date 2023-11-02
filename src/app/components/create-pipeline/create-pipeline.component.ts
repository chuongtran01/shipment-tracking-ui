import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CreatePipeline } from 'src/app/models/Pipeline';
import { PipelineService } from 'src/app/services/pipeline/pipeline.service';
import { constants } from '../../utils/app.constants';

@Component({
  selector: 'app-create-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss'],
})
export class CreatePipelineComponent {
  @Input({ required: true }) showCreatePipelineModal!: boolean;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() createPipelineEvent = new EventEmitter();

  faXmark = faXmark;
  CONSTANTS = constants;
  pipelineNameError: string = '';
  isRunning: boolean = false;

  constructor(
    private pipelineService: PipelineService,
    private router: Router
  ) {}

  createPipelineGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  get showPipelineNameErrorMessage(): boolean {
    if (
      this.createPipelineGroup.controls.name.invalid &&
      this.createPipelineGroup.controls.name.touched
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

  handleCreatePipeline() {
    this.isRunning = true;
    const newPipeline: CreatePipeline = {
      name: this.createPipelineGroup.controls.name!.value!,
      organizationId: '101',
      description: this.createPipelineGroup.controls.description!.value!,
      teamId: '1',
    };
    this.pipelineService.createPipeline(newPipeline).subscribe({
      next: () => {
        this.isRunning = false;
        this.closePopup();
        this.createPipelineEvent.emit();
      },
      error: () => {
        this.isRunning = false;
      },
    });
  }
}
