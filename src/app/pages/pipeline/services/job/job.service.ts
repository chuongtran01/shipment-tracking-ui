import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateJob, Job } from 'src/app/pages/pipeline/models/Job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: null,
})
export class JobService {
  path = '/metadata/job';

  constructor(private http: HttpClient) {}

  createJob(jobInfo: CreateJob): Observable<Job> {
    return this.http.post<Job>(environment.apiUrl + this.path, jobInfo);
  }

  getJobsByPipelineId(pipelineId: string): Observable<Job[]> {
    return this.http.get<Job[]>(environment.apiUrl + this.path + `/pipelineId/${pipelineId}`);
  }
}
