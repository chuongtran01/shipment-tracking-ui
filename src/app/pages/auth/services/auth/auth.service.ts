import { Injectable } from '@angular/core';
import { StorageService } from '../../../../services/storage/storage.service';
import { HttpClient } from '@angular/common/http';
import {
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
} from '../../models/Auth';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storageService: StorageService,
    private http: HttpClient
  ) {}

  setAccessToken(token: string) {
    return this.storageService.setData('access-token', token);
  }

  getAccessToken(): string | null {
    return this.storageService.getData('access-token');
  }

  setTeamId(teamId: string) {
    return this.storageService.setData('team-id', teamId);
  }

  getTeamId(): string | null {
    // return this.storageService.getData("team-id");
    return '1'; // TODO: Remove this line and uncomment the above line
  }

  setOrganizationId(organizationId: string) {
    return this.storageService.setData('organization-id', organizationId);
  }

  getOrganizationId(): string | null {
    return this.storageService.getData('organization-id');
  }

  setRefreshToken(token: string) {
    return this.storageService.setData('refresh-token', token);
  }

  getRefreshToken(): string | null {
    return this.storageService.getData('refresh-token');
  }

  register(userRegistrationInfo: RegistrationRequest): Observable<object> {
    return this.http.post(
      environment.apiUrl + '/auth/register',
      userRegistrationInfo
    );
  }

  login(userLoginInfo: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      environment.apiUrl + '/auth/token',
      userLoginInfo
    );
  }

  logout(): Observable<object> {
    return this.http.post(environment.apiUrl + '/auth/logout', null);
  }
}
