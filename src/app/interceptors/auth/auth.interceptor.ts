import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken: string | null = this.authService.getAccessToken();
    const teamId: string | null = this.authService.getTeamId();
    const organizationId: string | null = this.authService.getOrganizationId();

    if (accessToken && teamId && organizationId) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
