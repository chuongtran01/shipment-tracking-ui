import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import { AuthInterceptor } from './auth.interceptor';
import {SharedModule} from "../../modules/shared/shared.module";

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SharedModule, HttpClientTestingModule
    ],
    providers: [
      AuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
