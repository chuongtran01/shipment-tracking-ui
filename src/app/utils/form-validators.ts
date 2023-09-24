import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const confirmPasswordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value === confirmPassword.value) {
      return null;
    }

    return {'passwordMismatch': true};
  }
}
