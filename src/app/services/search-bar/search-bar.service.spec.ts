import { TestBed } from '@angular/core/testing';
import { SearchBarService } from './search-bar.service';

describe('SearchBarService', () => {
  let service: SearchBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBarService],
    });
    service = TestBed.inject(SearchBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send and receive search input', () => {
    const testMessage = 'Test search input';
    let receivedMessage = '';

    // Subscribe to the observable and store the received message
    service.receiveSearchInput().subscribe((message) => {
      receivedMessage = message;
    });

    // Send a test message
    service.sendSearchInput(testMessage);

    // Check if the received message matches the test message
    expect(receivedMessage).toEqual(testMessage);
  });
});
