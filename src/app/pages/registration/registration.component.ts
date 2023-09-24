import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {confirmPasswordValidator} from "../../utils/form-validators";
import { constants } from "../../utils/app.constants";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  protected readonly constants = constants;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  registrationFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_])[A-Za-z\d!@#$%^&*()_]{8,20}$/)
    ]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {validators: confirmPasswordValidator()});

  // TODO: Use these for error notifications on the fields
  // this.registrationFormGroup.controls.name.valid
  // this.registrationFormGroup.controls.email.valid
  // this.registrationFormGroup.controls.password.valid
  // this.registrationFormGroup.errors?.['passwordMismatch'] - If true, then `confirmPassword` is not valid

  handleRegistration () {
    if (this.registrationFormGroup.invalid) {
      // TODO: show error notifications
      return;
    }

    /**
     * TODO: The values passed in this registration call are placeholders for now
     * and modifications should be made for them. Maybe adding more input fields
     */
    this.authService.register({
      firstName: this.registrationFormGroup.value.name as string,
      lastName: this.registrationFormGroup.value.name as string,
      username: this.registrationFormGroup.value.email as string,
      email: this.registrationFormGroup.value.email as string,
      organizationId: "demo-org-1",
      password: this.registrationFormGroup.value.password as string
    }).subscribe({
      next: () => {
        this.router.navigateByUrl("/login").then();
      }
    })
  }
}
