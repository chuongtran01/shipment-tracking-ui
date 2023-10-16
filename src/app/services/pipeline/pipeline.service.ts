import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPipeline } from 'src/app/models/Pipeline';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PipelineService {
  pipelines = '/pipelines';
  constructor(private http: HttpClient) {}

  searchPipelines(pipelineName: string): Observable<IPipeline[]> {
    // TODO: changed the /pipelines to the correct url when API is set up
    return this.http.get<IPipeline[]>(
      environment.apiUrl + this.pipelines + `/search?name=${pipelineName}`
    );
  }
}
