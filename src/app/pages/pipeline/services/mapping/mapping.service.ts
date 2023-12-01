import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateMapping, Mapping } from '../../models/Mapping';
import { Observable } from 'rxjs';
import { TransformationType } from '../../models/TransformationType';

@Injectable({
  providedIn: null,
})
export class MappingService {
  pathMapping = '/metadata/mapping';
  pathTransformation = '/metadata/transformations';

  constructor(private http: HttpClient) { }

  getAllMappingsByJob(jobId: string, teamId: string): Observable<Mapping[]> {
    const params = new HttpParams()
      .set('jobId', jobId)
      .set('teamId', teamId);

    return this.http.get<Mapping[]>(
      environment.apiUrl + this.pathMapping + `/allByJob`, { params }
    );
  }

  getMappingById(id: string, teamId: string): Observable<Mapping> {
    const params = new HttpParams()
      .set('id', id)
      .set('teamId', teamId);

    return this.http.get<Mapping>(
      environment.apiUrl + this.pathMapping, { params }
    );
  }

  createMapping(mappingInfo: CreateMapping): Observable<object> {
    return this.http.post(
      environment.apiUrl + this.pathMapping, mappingInfo
    );
  }

  getAllTransformationTypes(): Observable<TransformationType[]> {
    return this.http.get<TransformationType[]>(
      environment.apiUrl + this.pathTransformation + "/all"
    );
  }

  getTransformationTypeById(id: string): Observable<TransformationType> {
    const params = new HttpParams().set('id', id);
    
    return this.http.get<TransformationType>(
      environment.apiUrl + this.pathTransformation, { params }
    );
  }
}
