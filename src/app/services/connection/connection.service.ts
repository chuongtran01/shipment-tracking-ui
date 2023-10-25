import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionResponse } from 'src/app/models/Connection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) {}

  getAllConnections(teamId: number | string): Observable<ConnectionResponse[]> {
    return this.http.get<ConnectionResponse[]>(environment.apiUrl + "/metadata/connections/all?teamId=" + teamId);
  }
}
