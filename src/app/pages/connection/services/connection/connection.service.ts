import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionRequest, ConnectionResponse, ConnectionTypeResponse } from 'src/app/pages/connection/models/Connection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: null
})
export class ConnectionService {

  constructor(private http: HttpClient) {}

  getAllConnections(): Observable<ConnectionResponse[]> {
    return this.http.get<ConnectionResponse[]>(environment.apiUrl + "/metadata/connections/all");
  }

  getAllConnectionTypes(): Observable<ConnectionTypeResponse[]> {
    return this.http.get<ConnectionTypeResponse[]>(environment.apiUrl + "/metadata/connectionType/all");
  }

  getConnectionTypeByName(name: string) {
    return this.http.get<ConnectionTypeResponse[]>(environment.apiUrl + "/metadata/connectionType/search/" + name);
  }

  getConnectionTypeById(id: string) {
    return this.http.get<ConnectionTypeResponse[]>(environment.apiUrl + "/metadata/connectionType/" + id);
  }

  addConnectionType(connectionType: ConnectionTypeResponse): Observable<object> {
    return this.http.post(environment.apiUrl + "/metadata/connectionType", connectionType);
  }

  // TODO: Possibly change the API based on the source selected. Postgres as default now.
  addConnection(connectionInfo: ConnectionRequest): Observable<object> {
    return this.http.post(environment.apiUrl + "/metadata/connections/postgres", connectionInfo);
  }
}
