import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {
  constructor(private router: Router, private storageService: StorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.storageService.clearData();
          this.router.navigateByUrl('/auth/login').then();
        }
        return throwError(() => error);
      })
    );
  }
}
