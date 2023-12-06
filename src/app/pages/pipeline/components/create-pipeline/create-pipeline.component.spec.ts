import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ButtonComponent } from '../../../../components/button/button.component';

import { CreatePipelineComponent } from './create-pipeline.component';
import { constants } from '../../../../utils/app.constants';
import { PipelineService } from 'src/app/pages/pipeline/services/pipeline/pipeline.service';
import { CreatePipeline } from 'src/app/pages/pipeline/models/Pipeline';
import { DialogRef } from '@angular/cdk/dialog';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { of } from 'rxjs';

describe('CreatePipelineComponent', () => {
  let component: CreatePipelineComponent;
  let fixture: ComponentFixture<CreatePipelineComponent>;
  let CONSTANTS = constants;

  let mockDialogRef: jasmine.SpyObj<DialogRef<string>>;
  let mockPipelineService: jasmine.SpyObj<PipelineService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  mockDialogRef = jasmine.createSpyObj('DialogRef', ['close']);
  mockPipelineService = jasmine.createSpyObj('PipelineService', [
    'createPipeline',
  ]);

  mockAuthService = jasmine.createSpyObj('AuthService', [
    'getOrganizationId',
    'getTeamId',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePipelineComponent, ButtonComponent],
      imports: [FontAwesomeModule, SharedModule],
      providers: [
        { provide: PipelineService, useValue: mockPipelineService },
        { provide: DialogRef, useValue: mockDialogRef },
        { provide: AuthService, useValue: mockAuthService },
      ],
    });
    fixture = TestBed.createComponent(CreatePipelineComponent);
    component = fixture.componentInstance;
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

  it('should close the dialog', () => {
    component.closePopup();
    expect(mockDialogRef.close).toHaveBeenCalled();
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

  it('should close the dialog', () => {
    component.closePopup();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should handle pipeline creation', () => {
    spyOn(component, 'handleCreatePipeline').and.callThrough();

    const newPipeline: CreatePipeline = {
      name: 'TestPipeline',
      organizationId: 'TestOrgId',
      description: 'TestDescription',
      teamId: 'TestTeamId',
    };

    const buttonComponent = fixture.debugElement.query(
      By.directive(ButtonComponent)
    );
    const button = buttonComponent.nativeElement.querySelector('button');

    expect(button).toBeTruthy();

    expect(button.disabled).toBeTrue();

    component.createPipelineGroup.controls.name.setValue('sample.name');
    component.createPipelineGroup.controls.description.setValue(
      'sample.description'
    );

    fixture.detectChanges();

    expect(button.disabled).toBeFalse();

    expect(component.createPipelineGroup.controls.name.valid).toBeTruthy();
    expect(
      component.createPipelineGroup.controls.description.valid
    ).toBeTruthy();
    expect(component.createPipelineGroup.valid).toBeTruthy();

    button.click();

    expect(component.handleCreatePipeline).toHaveBeenCalled();

    expect(component.isRunning).toBeTrue();
  });
});
