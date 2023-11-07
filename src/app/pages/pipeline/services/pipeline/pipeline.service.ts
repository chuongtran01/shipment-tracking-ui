import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreatePipeline,
  Pipeline,
} from 'src/app/pages/pipeline/models/Pipeline';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: null, // change this to only on pipeline folder and not on root
})
export class PipelineService {
  path = '/metadata/pipeline';

  constructor(private http: HttpClient) {}

  searchByName(teamId: string, pipelineName: string): Observable<Pipeline[]> {
    const params = new HttpParams()
      .set('name', pipelineName)
      .set('teamId', teamId);

    return this.http.get<Pipeline[]>(
      environment.apiUrl + this.path + `/search`,
      {
        params,
      }
    );
  }

  fetchAll(teamId: string): Observable<Pipeline[]> {
    return this.http.get<Pipeline[]>(
      environment.apiUrl + this.path + `/all/${teamId}`
    );
  }

  fetchById(pipelineId: string, teamId: string): Observable<Pipeline> {
    const params = new HttpParams().set('id', pipelineId).set('teamId', teamId);
    return this.http.get<Pipeline>(environment.apiUrl + this.path, { params });
  }

  createPipeline(pipeline: CreatePipeline): Observable<object> {
    return this.http.post(environment.apiUrl + this.path, pipeline);
  }
}
