import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreatePipeline,
  Pipeline,
} from 'src/app/pages/pipeline/models/Pipeline';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: null,
})
export class PipelineService {
  path = '/metadata/pipeline';

  constructor(private http: HttpClient) {}

  searchByName(teamId: string, pipelineName: string): Observable<Pipeline[]> {
    const params = new HttpParams().set('name', pipelineName);

    return this.http.get<Pipeline[]>(
      environment.apiUrl + this.path + `/search`,
      {
        params,
      }
    );
  }

  fetchAll(teamId: string): Observable<Pipeline[]> {
    return this.http.get<Pipeline[]>(environment.apiUrl + this.path + `/all`);
  }

  fetchById(pipelineId: string, teamId: string): Observable<Pipeline> {
    const params = new HttpParams().set('id', pipelineId);

    return this.http.get<Pipeline>(environment.apiUrl + this.path, { params });
  }

  createPipeline(pipeline: CreatePipeline): Observable<object> {
    return this.http.post(environment.apiUrl + this.path, pipeline);
  }
}
