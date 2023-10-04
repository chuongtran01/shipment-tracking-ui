import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [SharedModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const image = fixture.nativeElement.querySelector('.forgot-password-left-container img');
    expect(image).toBeTruthy();
    expect(image.src).toContain("/assets/images/QuestionMarks.png");

    const title = fixture.nativeElement.querySelector('.forgot-password-title');
    expect(title.textContent).toContain("Forgot Password?");

    const description = fixture.nativeElement.querySelector('.forgot-password-description');
    expect(description.textContent).toContain("Enter in your Email for a reset code");

    const emailContainer = fixture.nativeElement.querySelector('.forgot-password-email');
    expect(emailContainer).toBeTruthy();

    const emailLabel = emailContainer.querySelector('label');
    expect(emailLabel.textContent).toContain("Email");
    expect(emailContainer.querySelector('input')).toBeTruthy();

    const backToLogin = fixture.nativeElement.querySelector('.forgot-password-back');
    expect(backToLogin.querySelector('fa-icon')).toBeTruthy();
    expect(backToLogin.textContent).toContain("Back to Log in");
  });

  it('should update input value when user types in email', () => {
    const emailTest = "pau@mail.com";
    const emailInput = fixture.nativeElement.querySelector('input');
    emailInput.value = emailTest;
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.forgotPasswordGroup.controls['email'].value).toEqual(emailTest);
  });

  it('should handle Reset Password - with valid values', () => {
    spyOn(component, 'handleReset');

    component.forgotPasswordGroup.controls['email'].setValue("test@mail.com");
    fixture.detectChanges();

    const resetButton = fixture.nativeElement.querySelector('.button');
    console.log(resetButton);
    resetButton.click();
    fixture.detectChanges();

    expect(component.forgotPasswordGroup.controls['email'].valid).toBeTruthy();
    expect(component.forgotPasswordGroup.valid).toBeTruthy();
    expect(component.handleReset).toHaveBeenCalled();
  });

  it('should not handle Reset Password - empty values', () => {
    spyOn(component, 'handleReset');

    component.forgotPasswordGroup.controls['email'].setValue("");
    fixture.detectChanges();

    const resetButton = fixture.nativeElement.querySelector('.button');
    resetButton.click();
    fixture.detectChanges();

    expect(component.forgotPasswordGroup.controls['email'].valid).toBeFalse();
    expect(component.forgotPasswordGroup.valid).toBeFalse();
    expect(component.handleReset).not.toHaveBeenCalled();
  });

  it('should not handle Reset Password - non valid values', () => {
    spyOn(component, 'handleReset');
    const resetButton = fixture.nativeElement.querySelector('.button');

    component.forgotPasswordGroup.controls['email'].setValue("notanemail@test.");
    fixture.detectChanges();
    resetButton.click();
    fixture.detectChanges();

    expect(component.forgotPasswordGroup.controls['email'].valid).toBeFalse();
    expect(component.forgotPasswordGroup.valid).toBeFalse();
    expect(component.handleReset).not.toHaveBeenCalled();

    component.forgotPasswordGroup.controls['email'].setValue("notanemail");
    fixture.detectChanges();
    resetButton.click();
    fixture.detectChanges();

    expect(component.forgotPasswordGroup.controls['email'].valid).toBeFalse();
    expect(component.forgotPasswordGroup.valid).toBeFalse();
    expect(component.handleReset).not.toHaveBeenCalled();
  });

  it('should handle Back to Login', () => {
    spyOn(component, 'handleBackToLogin');

    const backButton = fixture.nativeElement.querySelector('.forgot-password-back');
    backButton.click();
    fixture.detectChanges();

    expect(component.handleBackToLogin).toHaveBeenCalled();
  });
});
