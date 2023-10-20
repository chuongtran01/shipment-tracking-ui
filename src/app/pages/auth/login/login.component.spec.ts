import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { AuthService } from '../../../services/auth/auth.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../../../components/button/button.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { constants } from '../../../utils/app.constants';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;
  let CONSTANTS: any;

  const AuthServiceStub = {
    login: jasmine.createSpy('login'),
    setAccessToken: jasmine.createSpy('setAccessToken'),
    setRefreshToken: jasmine.createSpy('setRefreshToken'),
  };

  AuthServiceStub.login
    .withArgs({
      username: 'sample.username',
      password: 'Secure_password2',
    })
    .and.returnValue(
      of({
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        organizationId: '',
        accessToken: 'sample-access-token',
        refreshToken: 'sample-refresh-token',
      })
    );

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: AuthService, useValue: AuthServiceStub }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    CONSTANTS = constants;

    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    //TODO: Tests to make sure individual elements are rendered should be placed here
  });

  describe('UI Component', () => {
    it("Check for heading's title", () => {
      const HeadingTitle =
        fixture.nativeElement.querySelector('.log-in-welcome').textContent;
      expect(HeadingTitle).toContain(CONSTANTS.login.welcome);
      expect(HeadingTitle).toContain(CONSTANTS.login.name);
      expect(HeadingTitle).toContain(CONSTANTS.login.signIn);
    });

    it('Check for Sign Up Navigation Link', () => {
      const SignUpLink = fixture.nativeElement.querySelector(
        '.log-in-sign-up-text'
      ).textContent;
      expect(SignUpLink).toContain(CONSTANTS.login.signUp);
    });

    it('Check for Input Fields Label', () => {
      const nameLabel = fixture.nativeElement.querySelector(
        '.log-in-form .log-in-field:nth-child(1) label'
      );
      expect(nameLabel.textContent).toContain(CONSTANTS.login.username);

      const passwordLabel = fixture.nativeElement.querySelector(
        '.log-in-form .log-in-field:nth-child(2) label'
      );
      expect(passwordLabel.textContent).toContain(CONSTANTS.login.password);
    });

    it('Check for Forgot Password Navigation Link', () => {
      const ForgotPasswordLink =
        fixture.nativeElement.querySelector('.log-in-forgot').textContent;
      expect(ForgotPasswordLink).toContain(CONSTANTS.login.forgotPassword);
    });
  });

  describe('Test for validation functions', () => {
    it('Check showUsernameErrorMessage() for empty value', () => {
      const input = component.loginGroup.controls['username'];
      input.setValue('');
      input.markAsTouched();
      input.markAsDirty();

      const error = component.showUsernameErrorMessage;

      expect(error).toBeTrue();
      expect(component.userNameError).toEqual('Please enter your Username');

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.log-in-form .log-in-field:nth-child(1) .log-in-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Please enter your Username'
      );
    });

    it('Check showPasswordErrorMessage() for empty value', () => {
      const input = component.loginGroup.controls['password'];
      input.setValue('');
      input.markAsTouched();
      input.markAsDirty();

      const error = component.showPasswordErrorMessage;

      expect(error).toBeTrue();
      expect(component.passwordError).toEqual('Please enter your Password');

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.log-in-form .log-in-field:nth-child(2) .log-in-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Please enter your Password'
      );
    });

    it('Check with valid value', () => {
      const inputUsername = component.loginGroup.controls['username'];
      const inputPassword = component.loginGroup.controls['password'];

      inputUsername.setValue('sample-username');
      inputPassword.setValue('Sample_Password1');
      inputUsername.markAsTouched();
      inputUsername.markAsDirty();
      inputPassword.markAsTouched();
      inputPassword.markAsDirty();

      const errorUsername = component.showUsernameErrorMessage;
      const errorPassword = component.showPasswordErrorMessage;

      expect(errorUsername).toBeFalse();
      expect(errorPassword).toBeFalse();

      expect(component.userNameError).toEqual('');
      expect(component.passwordError).toEqual('');

      fixture.detectChanges();

      const errorMessageUsername = fixture.debugElement.query(
        By.css('.log-in-form .log-in-field:nth-child(1) .log-in-field-error')
      );

      const errorMessagePassword = fixture.debugElement.query(
        By.css('.log-in-form .log-in-field:nth-child(2) .log-in-field-error')
      );

      expect(errorMessageUsername).toBeNull();
      expect(errorMessagePassword).toBeNull();
    });

    it('Check Check showPasswordErrorMessage() with invalid values', () => {
      const input = component.loginGroup.controls['password'];
      input.setValue('sample-password');
      input.markAsTouched();
      input.markAsDirty();

      const error = component.showPasswordErrorMessage;

      expect(error).toBeTrue();
      expect(component.passwordError).toEqual('Password is invalid');

      fixture.detectChanges();

      const errorMessage = fixture.debugElement.query(
        By.css('.log-in-form .log-in-field:nth-child(2) .log-in-field-error')
      );

      expect(errorMessage.nativeElement.innerHTML).toContain(
        'Password is invalid'
      );
    });
  });

  describe('Login Button', () => {
    it('click event - with valid values', () => {
      spyOn(component, 'handleSignIn').and.callThrough();

      component.loginGroup.controls['username'].setValue('sample.username');
      component.loginGroup.controls['password'].setValue('Secure_password2');

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(
        By.directive(ButtonComponent)
      );
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeFalse();

      button.click();

      expect(component.loginGroup.controls['username'].valid).toBeTruthy();
      expect(component.loginGroup.controls['password'].valid).toBeTruthy();
      expect(component.loginGroup.valid).toBeTruthy();
      expect(component.handleSignIn).toHaveBeenCalled();
      expect(authService.login).toHaveBeenCalledOnceWith({
        username: 'sample.username',
        password: 'Secure_password2',
      });
      expect(authService.setAccessToken).toHaveBeenCalledOnceWith(
        'sample-access-token'
      );
      expect(authService.setRefreshToken).toHaveBeenCalledOnceWith(
        'sample-refresh-token'
      );
      expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/pipeline');
    });

    it('click event - with non valid values', () => {
      spyOn(component, 'handleSignIn');

      component.loginGroup.controls['username'].setValue('sample.username');
      component.loginGroup.controls['password'].setValue('Securepassword2');

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(
        By.directive(ButtonComponent)
      );
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeTruthy();

      button.click();

      expect(component.loginGroup.controls['username'].valid).toBeTruthy();
      expect(component.loginGroup.controls['password'].valid).toBeFalse();
      expect(component.loginGroup.valid).toBeFalse();
      expect(component.handleSignIn).not.toHaveBeenCalled();
    });

    it('click event - with empty values', () => {
      spyOn(component, 'handleSignIn');

      component.loginGroup.controls['username'].setValue('');
      component.loginGroup.controls['password'].setValue('');

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(
        By.directive(ButtonComponent)
      );
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeTruthy();

      button.click();

      expect(component.loginGroup.controls['username'].valid).toBeFalse();
      expect(component.loginGroup.controls['password'].valid).toBeFalse();
      expect(component.loginGroup.valid).toBeFalse();
      expect(component.handleSignIn).not.toHaveBeenCalled();
    });
  });
});
