import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [JobService],
    });
    service = TestBed.inject(JobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
