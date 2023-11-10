import { TestBed } from '@angular/core/testing';
import { ToastParam, ToastType } from 'src/app/models/Toast';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService],
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send and receive toast object', () => {
    let mockToast: ToastParam = {
      severity: ToastType.success,
      summary: 'mock-summary',
      detail: 'mock-detail',
      key: 'mock-key',
    };

    const testToast = mockToast;
    let receivedToast: ToastParam = {
      severity: ToastType.default,
      summary: '',
      detail: '',
      key: '',
    };

    // Subscribe to the observable and store the received message
    service.receiveToast().subscribe((data) => {
      receivedToast = data;
    });

    // Send a test message
    service.sendToast(mockToast);

    // Check if the received message matches the test message
    expect(receivedToast).toEqual(mockToast);
  });
});
