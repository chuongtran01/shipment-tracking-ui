import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { constants } from '../../../../utils/app.constants';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let authService: AuthService;
  let router: Router;
  let CONSTANTS: any;

  const AuthServiceStub = {
    register: jasmine.createSpy('register'),
  };

  AuthServiceStub.register
    .withArgs({
      firstName: 'sample.name',
      lastName: 'sample.lastName',
      username: 'sample.email@email.com',
      email: 'sample.email@email.com',
      password: 'Secure_password2',
      organizationId: 'demo-org-1',
    })
    .and.returnValue(of(true));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AuthService, useValue: AuthServiceStub }],
    });
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    CONSTANTS = constants;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('UI Component', () => {
    it("Check for heading's title", () => {
      const createAccountText = fixture.nativeElement.querySelector(
        '.sign-up-welcome div'
      ).textContent;
      expect(createAccountText).toContain(CONSTANTS.registration.createAccount);
    });

    it('Check for Sign In Navigation Link', () => {
      const signInLink = fixture.nativeElement.querySelector(
        '.sign-up-no-acc .sign-up-sign-up-text'
      );
      expect(signInLink.textContent).toContain(CONSTANTS.registration.signIn);

      signInLink.click();
    });

    it("Check for input field's label", () => {
      const firstNameLabel = fixture.nativeElement.querySelector(
        '.sign-up-form .sign-up-field:nth-child(1) label'
      );
      expect(firstNameLabel.textContent).toContain(CONSTANTS.registration.form.firstName);

      const lastNameLabel = fixture.nativeElement.querySelector(
        '.sign-up-form .sign-up-field:nth-child(2) label'
      );
      expect(lastNameLabel.textContent).toContain(CONSTANTS.registration.form.lastName);

      const emailLabel = fixture.nativeElement.querySelector(
        '.sign-up-form .sign-up-field:nth-child(3) label'
      );
      expect(emailLabel.textContent).toContain(
        CONSTANTS.registration.form.email
      );

      const passwordLabel = fixture.nativeElement.querySelector(
        '.sign-up-form .sign-up-field:nth-child(4) label'
      );
      expect(passwordLabel.textContent).toContain(
        CONSTANTS.registration.form.password
      );

      const confirmPasswordLabel = fixture.nativeElement.querySelector(
        '.sign-up-form .sign-up-field:nth-child(5) label'
      );
      expect(confirmPasswordLabel.textContent).toContain(
        CONSTANTS.registration.form.confirmPassword
      );
    });
  });

  describe('validateTitleControl()', () => {
    it('test for empty first name input', () => {
      const input = component.registrationFormGroup.controls['firstName'];
      input.setValue('');
      input.markAsTouched();

      const validation = component.validateTitleControl('firstName');
      expect(validation).toBeTrue();

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.sign-up-form .sign-up-field:nth-child(1) .sign-up-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Please enter your First Name'
      );
    });

    it('test for empty last name input', () => {
      const input = component.registrationFormGroup.controls['lastName'];
      input.setValue('');
      input.markAsTouched();

      const validation = component.validateTitleControl('lastName');
      expect(validation).toBeTrue();

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.sign-up-form .sign-up-field:nth-child(2) .sign-up-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Please enter your Last Name'
      );
    });

    it('test for invalid Email format', () => {
      const input = component.registrationFormGroup.controls['email'];
      input.setValue('invalid-email');
      input.markAsTouched();

      fixture.detectChanges();
      const validation = component.validateTitleControl('email');
      expect(validation).toBeTrue();

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.sign-up-form .sign-up-field:nth-child(3) .sign-up-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Invalid email format'
      );
    });

    it('test for invalid Password format', () => {
      const input = component.registrationFormGroup.controls['password'];
      input.setValue('invalidpassword');
      input.markAsTouched();
      const validation = component.validateTitleControl('password');
      expect(validation).toBeTrue();

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.sign-up-form .sign-up-field:nth-child(4) .sign-up-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Password must be between 8-20 characters, and must contain at least one uppercase and lower letter, one number, and one special character.'
      );
    });

    it('test for invalid Confirm Password', () => {
      const inputPasword = component.registrationFormGroup.controls['password'];
      const inputConfirmPassword =
        component.registrationFormGroup.controls['confirmPassword'];

      inputPasword.setValue('Secure_password2');
      inputConfirmPassword.setValue('Secure_password1');

      inputPasword.markAsTouched();
      inputConfirmPassword.markAsDirty();

      fixture.detectChanges();
      const validation = component.validateTitleControl('confirmPassword');
      expect(validation).toBeTrue();

      const errorMessage = fixture.debugElement.query(
        By.css('.sign-up-form .sign-up-field:nth-child(5) .sign-up-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Password and Confirm Password must match'
      );
    });

    it('test for valid input value', () => {
      const input = component.registrationFormGroup.controls['firstName'];
      input.setValue('sample.name');
      input.markAsTouched();

      fixture.detectChanges();

      const validationName = component.validateTitleControl('firstName');

      expect(validationName).toBeFalse();

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.sign-up-form .sign-up-field:nth-child(1) .sign-up-field-error')
      );

      expect(errorMessage).toBeNull();
    });
  });

  describe('Registration Button', () => {
    it('click event - with valid values', () => {
      spyOn(component, 'handleRegistration').and.callThrough();

      component.registrationFormGroup.controls['firstName'].setValue('sample.name');
      component.registrationFormGroup.controls['lastName'].setValue('sample.lastName');
      component.registrationFormGroup.controls['email'].setValue(
        'sample.email@email.com'
      );
      component.registrationFormGroup.controls['password'].setValue(
        'Secure_password2'
      );
      component.registrationFormGroup.controls['confirmPassword'].setValue(
        'Secure_password2'
      );

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(
        By.directive(ButtonComponent)
      );
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeFalse();

      button.click();

      expect(
        component.registrationFormGroup.controls['firstName'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['lastName'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['email'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['password'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['confirmPassword'].valid
      ).toBeTruthy();

      expect(component.registrationFormGroup.valid).toBeTruthy();
      expect(component.handleRegistration).toHaveBeenCalled();
      expect(authService.register).toHaveBeenCalledOnceWith({
        firstName: 'sample.name',
        lastName: 'sample.lastName',
        username: 'sample.email@email.com',
        email: 'sample.email@email.com',
        password: 'Secure_password2',
        organizationId: 'demo-org-1',
      });

      expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/auth/login');
    });

    it('click event - with non valid values', () => {
      spyOn(component, 'handleRegistration');

      component.registrationFormGroup.controls['firstName'].setValue('sample.name');
      component.registrationFormGroup.controls['lastName'].setValue('sample.lastName');
      component.registrationFormGroup.controls['email'].setValue(
        'sample.invalid-email'
      );
      component.registrationFormGroup.controls['password'].setValue(
        'Secure_password2'
      );
      component.registrationFormGroup.controls['confirmPassword'].setValue(
        'Secure_password2'
      );

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(
        By.directive(ButtonComponent)
      );
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeTruthy();

      button.click();

      expect(
        component.registrationFormGroup.controls['firstName'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['lastName'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['email'].valid
      ).toBeFalse();
      expect(
        component.registrationFormGroup.controls['password'].valid
      ).toBeTruthy();
      expect(
        component.registrationFormGroup.controls['confirmPassword'].valid
      ).toBeTruthy();

      expect(component.registrationFormGroup.valid).toBeFalse();
      expect(component.handleRegistration).not.toHaveBeenCalled();
    });

    it('click event - with empty values', () => {
      spyOn(component, 'handleRegistration');

      component.registrationFormGroup.controls['firstName'].setValue('');
      component.registrationFormGroup.controls['lastName'].setValue('');
      component.registrationFormGroup.controls['email'].setValue('');
      component.registrationFormGroup.controls['password'].setValue('');
      component.registrationFormGroup.controls['confirmPassword'].setValue('');

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(
        By.directive(ButtonComponent)
      );
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeTruthy();

      button.click();

      expect(
        component.registrationFormGroup.controls['firstName'].valid
      ).toBeFalse();
      expect(
        component.registrationFormGroup.controls['lastName'].valid
      ).toBeFalse();
      expect(
        component.registrationFormGroup.controls['email'].valid
      ).toBeFalse();
      expect(
        component.registrationFormGroup.controls['password'].valid
      ).toBeFalse();
      expect(
        component.registrationFormGroup.controls['confirmPassword'].valid
      ).toBeFalse();
      expect(component.registrationFormGroup.valid).toBeFalse();
      expect(component.handleRegistration).not.toHaveBeenCalled();
    });
  });
});
