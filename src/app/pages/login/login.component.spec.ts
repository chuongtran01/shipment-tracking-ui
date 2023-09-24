import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {SharedModule} from "../../modules/shared/shared.module";
import {AuthService} from "../../services/auth/auth.service";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";
import {ButtonComponent} from "../../components/button/button.component";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  const AuthServiceStub = {
    login: jasmine.createSpy('login'),
    setAccessToken: jasmine.createSpy('setAccessToken'),
    setRefreshToken: jasmine.createSpy('setRefreshToken')
  };

  AuthServiceStub.login.withArgs({
    username: "sample.username",
    password: "Secure_password2"
  }).and.returnValue(of({
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    organizationId: "",
    accessToken: "sample-access-token",
    refreshToken: "sample-refresh-token"
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [
        {provide: AuthService, useValue: AuthServiceStub}
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    //TODO: Tests to make sure individual elements are rendered should be placed here
  });

  describe('Login Button', () => {

    it('click event - with valid values', () => {
      spyOn(component, 'handleSignIn').and.callThrough();

      component.loginGroup.controls['username'].setValue("sample.username");
      component.loginGroup.controls['password'].setValue("Secure_password2");

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(By.directive(ButtonComponent));
      const button = buttonComponent.nativeElement.querySelector('button');

      expect(button.disabled).toBeFalse();

      button.click();

      expect(component.loginGroup.controls['username'].valid).toBeTruthy();
      expect(component.loginGroup.controls['password'].valid).toBeTruthy();
      expect(component.loginGroup.valid).toBeTruthy();
      expect(component.handleSignIn).toHaveBeenCalled();
      expect(authService.login).toHaveBeenCalledOnceWith({
        username: "sample.username",
        password: "Secure_password2"
      });
      expect(authService.setAccessToken).toHaveBeenCalledOnceWith("sample-access-token");
      expect(authService.setRefreshToken).toHaveBeenCalledOnceWith("sample-refresh-token");
      expect(router.navigateByUrl).toHaveBeenCalledOnceWith("/home");
    });

    it('click event - with non valid values', () => {
      spyOn(component, 'handleSignIn');

      component.loginGroup.controls['username'].setValue("sample.username");
      component.loginGroup.controls['password'].setValue("Securepassword2");

      fixture.detectChanges();

      const buttonComponent = fixture.debugElement.query(By.directive(ButtonComponent));
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

      const buttonComponent = fixture.debugElement.query(By.directive(ButtonComponent));
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
