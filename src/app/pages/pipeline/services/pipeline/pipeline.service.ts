import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePipeline, Pipeline } from 'src/app/pages/pipeline/models/Pipeline';
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

    return this.http.get<Pipeline[]>(environment.apiUrl + this.path + `/name`, {
      params,
    });
  }

  fetchAll(teamId: string) {
    return this.http.get<Pipeline[]>(
      environment.apiUrl + this.path + `/all/${teamId}`
    );
  }

  createPipeline(pipeline: CreatePipeline): Observable<object> {
    return this.http.post(environment.apiUrl + this.path, pipeline);
  }
}
