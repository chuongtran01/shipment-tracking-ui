import { TestBed } from '@angular/core/testing';

import { ConnectionService } from './connection.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('ConnectionService', () => {
  let service: ConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [ConnectionService],
    });
    service = TestBed.inject(ConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
