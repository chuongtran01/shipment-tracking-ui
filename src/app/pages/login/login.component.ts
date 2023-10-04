import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {PrincipalService} from "../../services/principal/principal.service";
import { constants } from "../../utils/app.constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  protected readonly constants = constants;

  constructor(
    private router: Router,
    private authService: AuthService,
    private principalService: PrincipalService
  ) {}

  forgotPassword () {
    this.router.navigateByUrl("/forgot-password");
  }

  handleSignIn () {
    this.authService.login({
      username: this.loginGroup.value.username as string,
      password: this.loginGroup.value.password as string
    }).subscribe( {
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
        this.authService.setAccessToken(response.accessToken);
        this.authService.setRefreshToken(response.refreshToken);
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.log("Login Error: ", err);
        // TODO: Trigger toast message here with error
      }
    });
  }

  loginGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_])[A-Za-z\d!@#$%^&*()_]{8,20}$/)
    ])
  });

  get showUsernameErrorMessage (): boolean {
    return this.loginGroup.controls.username.invalid;
  }

  get showPasswordErrorMessage (): boolean {
    return this.loginGroup.controls.password.invalid;
  }
}
