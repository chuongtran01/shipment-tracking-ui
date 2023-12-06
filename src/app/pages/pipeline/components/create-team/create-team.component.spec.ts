import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTeamComponent } from './create-team.component';

describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let fixture: ComponentFixture<CreateTeamComponent>;
  let mockDialogRef: jasmine.SpyObj<DialogRef<string>>;

  beforeEach(() => {
    mockDialogRef = jasmine.createSpyObj('DialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [CreateTeamComponent],
      imports: [ReactiveFormsModule, FontAwesomeModule, DialogModule],
      providers: [{ provide: DialogRef, useValue: mockDialogRef }],
    });

    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog', () => {
    component.closePopup();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should handle choosing a team type', () => {
    const teamType = 'Private';
    component.handleChooseTeamType(teamType);
    expect(component.isTeamTypeChosen).toBe(true);
    expect(component.createTeamGroup.get('teamType')?.value).toBe(teamType);
  });

  it('should handle going back', () => {
    component.isTeamTypeChosen = true;
    component.handleBackButton();
    expect(component.isTeamTypeChosen).toBe(false);
  });

  it('should show team name error message when name is invalid and touched', () => {
    const nameControl = component.createTeamGroup.get('name');
    nameControl?.setValue('');
    nameControl?.markAsTouched();
    fixture.detectChanges();
    expect(component.showTeamNameErrorMessage).toBe(true);
  });

  it('should not show team name error message when name is valid', () => {
    const nameControl = component.createTeamGroup.get('name');
    nameControl?.setValue('Valid Team Name');
    nameControl?.markAsTouched();
    fixture.detectChanges();
    expect(component.showTeamNameErrorMessage).toBe(false);
  });
});
