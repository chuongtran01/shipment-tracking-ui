import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../../utils/form-validators';
import { ToastParam, ToastType } from 'src/app/models/Toast';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  firstNameError: string = '';
  lastNameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  isSubmitted: boolean = false;
  isRunning: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  registrationFormGroup = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_])[A-Za-z\d!@#$%^&*()_]{8,20}$/
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: confirmPasswordValidator() }
  );

  validateTitleControl(title: string): boolean {
    const titleControl = this.registrationFormGroup.get(title);

    if (
      titleControl?.invalid &&
      (titleControl?.dirty || titleControl?.touched || this.isSubmitted)
    ) {
      if (title == 'firstName') {
        this.firstNameError = 'Please enter your First Name';
      } else if (title == 'lastName') {
        this.lastNameError = 'Please enter your Last Name';
      } else if (title == 'email') {
        if (titleControl?.errors?.['required']) {
          this.emailError = 'Please enter your Email';
        } else if (titleControl?.errors?.['email']) {
          this.emailError = 'Invalid email format';
        }
      } else if (title == 'password') {
        if (titleControl?.errors?.['required']) {
          this.passwordError = 'Please enter your Password';
        } else if (titleControl?.errors?.['pattern']) {
          this.passwordError =
            'Password must be between 8-20 characters, and must contain at least one uppercase and lower letter, one number, and one special character.';
        }
      } else if (title == 'confirmPassword') {
        if (titleControl?.errors?.['required']) {
          this.confirmPasswordError = 'Please enter your Confirm Password';
        }
      }
      return true;
    } else if (
      titleControl?.dirty &&
      this.registrationFormGroup.errors?.['passwordMismatch']
    ) {
      if (title == 'confirmPassword') {
        this.confirmPasswordError = 'Password and Confirm Password must match';
        return true;
      }
    }
    return false;
  }

  showToast(
    severity: ToastType,
    summary: string,
    detail: string,
    key: string,
    navigate?: string
  ) {
    let toastParams: ToastParam = {
      severity: severity,
      summary: summary,
      detail: detail,
      key: key,
      navigate: navigate,
    };
  }

  handleRegistration() {
    this.isSubmitted = true;
    this.isRunning = true;

    if (this.registrationFormGroup.invalid) {
      this.isRunning = false;
      return;
    }

    this.authService
      .register({
        firstName: this.registrationFormGroup.value.firstName as string,
        lastName: this.registrationFormGroup.value.lastName as string,
        username: this.registrationFormGroup.value.email as string,
        email: this.registrationFormGroup.value.email as string,
        organizationId: 'demo-org-1', // TODO: Modify organizationId to your choice
        password: this.registrationFormGroup.value.password as string,
      })
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/auth/login').then();
          this.isRunning = false;
          this.showToast(
            ToastType.success,
            'Successfully registered',
            'You can now log in using the new created account',
            'key-2',
            '/auth/login'
          );
        },
      });
  }
}
