import { TestBed } from '@angular/core/testing';
import { DropdownService } from './dropdown.service';

describe('DrowndownService', () => {
  let service: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownService],
    });
    service = TestBed.inject(DropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should send and receive search input', () => {
  //   const testMessage = 'Test search input';
  //   let receivedMessage = '';

  //   // Subscribe to the observable and store the received message
  //   service.receiveSelectedOption().subscribe((message) => {
  //     receivedMessage = message;
  //   });

  //   // Send a test message
  //   service.sendSelectedOption(testMessage);

  //   // Check if the received message matches the test message
  //   expect(receivedMessage).toEqual(testMessage);
  // });
});
