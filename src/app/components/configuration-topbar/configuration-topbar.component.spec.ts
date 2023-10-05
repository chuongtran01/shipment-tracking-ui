import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigurationTopbarComponent } from './configuration-topbar.component';

describe('ConfigurationTopbarComponent', () => {
  let component: ConfigurationTopbarComponent;
  let fixture: ComponentFixture<ConfigurationTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationTopbarComponent],
      imports: [FontAwesomeModule],
    });
    fixture = TestBed.createComponent(ConfigurationTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the current step to 1 by default', () => {
    expect(component.currentStep).toBe(1);
  });

  it('should apply "disabled" class to step with ID greater than currentStep', () => {
    component.currentStep = 2;
    const stepElement = fixture.nativeElement.querySelectorAll('.topbar-step')[2];
    fixture.detectChanges();

    expect(stepElement.classList.contains('disabled')).toBeTruthy();
  });

  it('should apply "completed" class to step with ID less than currentStep', () => {
    component.currentStep = 2;
    const stepElement = fixture.nativeElement.querySelector('.topbar-step');
    fixture.detectChanges();

    expect(stepElement.classList.contains('completed')).toBeTruthy();
  });

  it('should call navigateToPreviousPage method when back button is clicked', () => {
    spyOn(component, 'navigateToPreviousPage');
    const backButton = fixture.nativeElement.querySelector('.topbar-back-btn button');
    backButton.click();

    expect(component.navigateToPreviousPage).toHaveBeenCalled();
  });

  it('should call cancelProcess method when cancel button is clicked', () => {
    spyOn(component, 'cancelProcess');
    const cancelButton = fixture.nativeElement.querySelector('.topbar-cancel-btn button');
    cancelButton.click();

    expect(component.cancelProcess).toHaveBeenCalled();
  });
});
