import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ButtonComponent } from '../button/button.component';

import { CreatePipelineComponent } from './create-pipeline.component';
import { constants } from '../../utils/app.constants';
import { PipelineService } from 'src/app/services/pipeline/pipeline.service';
import { CreatePipeline } from 'src/app/models/Pipeline';
import { of } from 'rxjs';

describe('CreatePipelineComponent', () => {
  let component: CreatePipelineComponent;
  let fixture: ComponentFixture<CreatePipelineComponent>;
  let CONSTANTS = constants;
  let pipelineService: PipelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePipelineComponent, ButtonComponent],
      imports: [FontAwesomeModule, SharedModule],
      providers: [PipelineService],
    });
    fixture = TestBed.createComponent(CreatePipelineComponent);
    component = fixture.componentInstance;
    component.showCreatePipelineModal = true;
    pipelineService = TestBed.inject(PipelineService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const closeButton = fixture.debugElement.query(
      By.css('.create-pipeline-close-button-icon')
    );

    expect(closeButton).toBeTruthy();

    const headingTitle = fixture.debugElement.query(
      By.css('.create-pipeline-title')
    );

    expect(headingTitle.nativeElement.innerHTML).toContain(
      CONSTANTS.pipeline.createPipelineModal.createPipeline
    );

    const pipelineNameInputField = fixture.debugElement.query(
      By.css('.create-pipeline-input-field')
    );

    expect(pipelineNameInputField).toBeTruthy();

    const descriptionTextareaField = fixture.debugElement.query(
      By.css('.create-pipeline-textarea-field')
    );

    expect(descriptionTextareaField).toBeTruthy();

    const pipelineNameLabel = fixture.debugElement.query(
      By.css(
        '.create-pipeline-form .create-pipeline-field:nth-child(1) .create-pipeline-label label'
      )
    );

    expect(pipelineNameLabel.nativeElement.innerHTML).toContain(
      CONSTANTS.pipeline.createPipelineModal.pipelineName
    );

    const descriptionLabel = fixture.debugElement.query(
      By.css(
        '.create-pipeline-form .create-pipeline-field:nth-child(2) .create-pipeline-label label'
      )
    );

    expect(descriptionLabel.nativeElement.innerHTML).toContain(
      CONSTANTS.pipeline.createPipelineModal.description
    );

    const buttonElement = fixture.debugElement.query(By.css('.button-green'));

    expect(buttonElement).toBeTruthy();
  });

  it('should emit closeModalEvent when closePopup is called', () => {
    const closeSpy = spyOn(component.closeModalEvent, 'emit');
    component.closePopup();
    expect(closeSpy).toHaveBeenCalledWith(false);
  });

  it('should reset the form when closePopup is called', () => {
    const closeSpy = spyOn(component.createPipelineGroup, 'reset');
    component.createPipelineGroup.controls.name.setValue('Test Pipeline');

    component.closePopup();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should have a valid form when both fields are filled', () => {
    component.createPipelineGroup.controls.name.setValue('Test Pipeline');
    component.createPipelineGroup.controls.description.setValue(
      'Test Description'
    );
    expect(component.createPipelineGroup.valid).toBe(true);
  });

  it('should display an error message when pipelineName is invalid', () => {
    const pipelineNameInput = component.createPipelineGroup.controls['name'];
    pipelineNameInput.setValue('');
    pipelineNameInput.markAsTouched();

    fixture.detectChanges();

    const error = component.pipelineNameError;

    expect(component.pipelineNameError).toEqual('Please enter Pipeline name');

    fixture.detectChanges();

    const errorElement = fixture.debugElement.query(
      By.css(
        '.create-pipeline-form .create-pipeline-field:nth-child(1) .create-pipeline-field-error'
      )
    );
    expect(errorElement.nativeElement.innerHTML).toContain(
      'Please enter Pipeline name'
    );
  });

  it('should handle create pipeline', fakeAsync(() => {
    spyOn(component.createPipelineEvent, 'emit');
    spyOn(component.closeModalEvent, 'emit');
    spyOn(pipelineService, 'createPipeline').and.returnValue(of({}));

    component.createPipelineGroup.controls['name'].setValue(
      'pipeline-name-test'
    );
    component.createPipelineGroup.controls['description'].setValue(
      'pipeline-description-test'
    );

    const newPipeline: CreatePipeline = {
      name: 'pipeline-name-test',
      organizationId: '101',
      description: 'pipeline-description-test',
      teamId: '1',
    };

    pipelineService.createPipeline;

    component.handleCreatePipeline();
    tick();

    expect(component.isRunning).toBe(false);
    expect(component.closeModalEvent.emit).toHaveBeenCalledWith(false);
    expect(component.createPipelineEvent.emit).toHaveBeenCalledOnceWith();

    expect(pipelineService.createPipeline).toHaveBeenCalledWith(newPipeline);
  }));
});
