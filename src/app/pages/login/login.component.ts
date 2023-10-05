import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { PrincipalService } from '../../services/principal/principal.service';
import { constants } from '../../utils/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected readonly constants = constants;

  userNameError: string = '';
  passwordError: string = '';

  isRunning: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private principalService: PrincipalService
  ) {}

  forgotPassword() {
    this.router.navigateByUrl('/forgot-password');
  }

  handleSignIn() {
    this.isRunning = true;

    this.authService
      .login({
        username: this.loginGroup.value.username as string,
        password: this.loginGroup.value.password as string,
      })
      .subscribe({
        next: (response) => {
          this.principalService.user.set({
            id: response.id,
            firstName: response.firstName,
            lastName: response.lastName,
            username: response.username,
            email: response.email,
            organizationId: response.organizationId,
            teamRoles: {},
          });
          this.isRunning = false;
          this.authService.setAccessToken(response.accessToken);
          this.authService.setRefreshToken(response.refreshToken);
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          this.isRunning = false;
          console.log('Login Error: ', err);
          // TODO: Trigger toast message here with error
        },
      });
  }

  loginGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_])[A-Za-z\d!@#$%^&*()_]{8,20}$/
      ),
    ]),
  });

  get showUsernameErrorMessage(): boolean {
    if (
      this.loginGroup.controls.username?.invalid &&
      this.loginGroup.controls.username?.touched
    ) {
      this.userNameError = 'Please enter your Username';
      return true;
    }
    return false;
  }

  get showPasswordErrorMessage(): boolean {
    if (
      this.loginGroup.controls.password?.invalid &&
      this.loginGroup.controls.password?.touched &&
      this.loginGroup.controls.password.errors?.['pattern']
    ) {
      this.passwordError = 'Password is invalid';
      return true;
    } else if (
      this.loginGroup.controls.password?.invalid &&
      this.loginGroup.controls.password?.touched &&
      this.loginGroup.controls.password.errors?.['required']
    ) {
      this.passwordError = 'Please enter your Password';
      return true;
    }
    return false;
  }
}
