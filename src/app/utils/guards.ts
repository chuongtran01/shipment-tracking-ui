import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthRouteGuard = () => {
  const authService: AuthService = inject(AuthService);
  const routes: Router = inject(Router);
  return authService.getAccessToken() || routes.createUrlTree(['/auth/login']);
};
