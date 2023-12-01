import { TestBed } from '@angular/core/testing';

import { MappingService } from './mapping.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MappingService', () => {
  let service: MappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [MappingService],
    });
    service = TestBed.inject(MappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
