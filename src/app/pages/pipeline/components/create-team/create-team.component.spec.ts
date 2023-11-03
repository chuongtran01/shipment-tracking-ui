import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ButtonComponent } from '../../../../components/button/button.component';

import { CreateTeamComponent } from './create-team.component';

describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let fixture: ComponentFixture<CreateTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, SharedModule],
      declarations: [CreateTeamComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
    component.showCreateTeamModal = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handleChooseTeamType correctly', () => {
    spyOn(component, 'handleCreateTeam');

    const chosenTeamType = 'Private';
    component.handleChooseTeamType(chosenTeamType);
    expect(component.isTeamTypeChosen).toBe(true);
    expect(component.createTeamGroup.get('teamType')?.value).toBe(
      chosenTeamType
    );
  });

  it('Should handle close modal correctly', () => {
    spyOn(component, 'closePopup');
    const closeIcon = fixture.nativeElement.querySelector(
      '.create-team-close-button-icon'
    );
    closeIcon.click();

    fixture.detectChanges();
    expect(component.isTeamTypeChosen).toBe(false);
    expect(component.closePopup).toHaveBeenCalled();
  });

  it('Should handle Back button correctly', () => {
    spyOn(component, 'handleBackButton');
    const chosenTeamType = 'Private';
    component.handleChooseTeamType(chosenTeamType);
    expect(component.isTeamTypeChosen).toBe(true);
    fixture.detectChanges();

    const backButton = fixture.nativeElement.querySelector(
      '.create-team-back-button'
    );

    backButton.click();

    fixture.detectChanges();

    expect(component.handleBackButton).toHaveBeenCalled();
  });

  it('Should handle input and create correctly', () => {
    spyOn(component, 'handleCreateTeam');

    const chosenTeamType = 'Private';
    component.handleChooseTeamType(chosenTeamType);

    component.createTeamGroup.controls.name.setValue('demo-team');
    component.createTeamGroup.controls.description.setValue('demo-description');

    fixture.detectChanges();

    expect(component.createTeamGroup.valid);

    const createButtonComponent = fixture.debugElement.query(
      By.directive(ButtonComponent)
    );

    const button = createButtonComponent.nativeElement.querySelector('button');

    expect(button.disabled).toBe(false);

    button.click();

    expect(component.handleCreateTeam).toHaveBeenCalled();
  });
});
