import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PipelineService } from './pipeline.service';

describe('PipelineService', () => {
  let service: PipelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
    });
    service = TestBed.inject(PipelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
