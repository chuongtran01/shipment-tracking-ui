import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) {}

  forgotPasswordGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // TODO: Implement forgot password functionality
  handleReset() {
    const email = this.forgotPasswordGroup.value.email;
  }

  handleBackToLogin() {
    this.router.navigateByUrl('/auth/login');
  }
}
