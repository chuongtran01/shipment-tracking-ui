import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ButtonComponent } from '../button/button.component';

import { CreatePipelineComponent } from './create-pipeline.component';
import { constants } from '../../utils/app.constants';

describe('CreatePipelineComponent', () => {
  let component: CreatePipelineComponent;
  let fixture: ComponentFixture<CreatePipelineComponent>;
  let CONSTANTS = constants;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePipelineComponent, ButtonComponent],
      imports: [FontAwesomeModule, SharedModule],
    });
    fixture = TestBed.createComponent(CreatePipelineComponent);
    component = fixture.componentInstance;
    component.showCreatePipelineModal = true;
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
    component.createPipelineGroup.controls.pipelineName.setValue(
      'Test Pipeline'
    );

    component.closePopup();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should have a valid form when both fields are filled', () => {
    component.createPipelineGroup.controls.pipelineName.setValue(
      'Test Pipeline'
    );
    component.createPipelineGroup.controls.description.setValue(
      'Test Description'
    );
    expect(component.createPipelineGroup.valid).toBe(true);
  });

  it('should display an error message when pipelineName is invalid', () => {
    const pipelineNameInput =
      component.createPipelineGroup.controls['pipelineName'];
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
});
