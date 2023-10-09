import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewJobRowComponent } from './overview-job-row.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CommonModule } from '@angular/common';

describe('OverviewJobRowComponent', () => {
  let component: OverviewJobRowComponent;
  let fixture: ComponentFixture<OverviewJobRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewJobRowComponent],
      imports: [SharedModule, CommonModule],
    });
    fixture = TestBed.createComponent(OverviewJobRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const elements = fixture.nativeElement;
    expect(component).toBeTruthy();
    component.id = 1;
    component.title = 'Employee_Records_Updated';
    component.description = 'Historical Load Running';
    component.alertMessage = '1 Warning';
    component.alertType = 'warning';
    component.eventsIngested = '8.4M';
    component.eventsNotLoaded = '4.23 M Events not loaded';
    component.jobStatus = 'active';
    component.lastSyncedTime = '6 minutes';
    fixture.detectChanges();

    expect(elements.querySelector('app-checkbox')).toBeTruthy();
    expect(elements.querySelector('.job-card-text-title')).toBeTruthy();
    expect(elements.querySelector('.job-card-text-description')).toBeTruthy();
    expect(elements.querySelector('.job-card-message')).toBeTruthy();
    expect(elements.querySelector('.job-card-message div')).toBeTruthy();
    expect(elements.querySelector('.job-card-events-ingested')).toBeTruthy();
    expect(elements.querySelector('.job-card-graph')).toBeTruthy();
    expect(elements.querySelector('.job-card-event-message')).toBeTruthy();
    expect(elements.querySelector('.job-card-event-message div')).toBeTruthy();
    expect(elements.querySelector('.job-card-status')).toBeTruthy();
    expect(elements.querySelector('.job-card-status-description div')).toBeTruthy();
    expect(elements.querySelector('.job-card-actions')).toBeTruthy();
  });

  it('should check the checkbox when clicked', () => {
    const checkbox = fixture.nativeElement.querySelector('.checkbox-container input');

    checkbox.click();
    fixture.detectChanges();
    expect(component.jobChecked).toBeTrue();

    checkbox.click();
    fixture.detectChanges();
    expect(component.jobChecked).toBeFalse();
  });

  it('should have failed status styles', () => {
    component.jobStatus = 'failed';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.job-card-status div[class="failed"]')).toBeTruthy();
  });

  it('should have paused status styles', () => {
    component.jobStatus = 'paused';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.job-card-status div[class="paused"]')).toBeTruthy();
  });

  it('should have queued status styles', () => {
    component.jobStatus = 'queued';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.job-card-status div[class="queued"]')).toBeTruthy();
  });

  it('should have active status styles', () => {
    component.jobStatus = 'active';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.job-card-status div[class="active"]')).toBeTruthy();
  });

  it('should render alertMessage when given - warning', () => {
    component.alertMessage = '1 warning';
    component.alertType = 'warning';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.job-card-message div[class="warning"]')).toBeTruthy();
  });

  it('should render alertMessage when given - failed', () => {
    component.alertMessage = '1 failure';
    component.alertType = 'failed';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.job-card-message div[class="failed"]')).toBeTruthy();
  });

  it('should render events not loaded message when given', () => {
    component.eventsNotLoaded = '4.23 M Events not loaded';
    fixture.detectChanges();

    const eventMessageEvent = fixture.nativeElement.querySelector('.job-card-event-message-events');
    expect(eventMessageEvent).toBeTruthy();
    expect(eventMessageEvent.textContent).toContain('4.23 M Events not loaded');
  });

  it('should not render optional elements when not given', () => {
    const elements = fixture.nativeElement;
    expect(elements.querySelector('.job-card-text-description')).toBeFalsy();
    expect(elements.querySelector('.job-card-message div')).toBeFalsy();
    expect(elements.querySelector('.job-card-event-message div')).toBeFalsy();
    expect(elements.querySelector('.job-card-status-description div')).toBeFalsy();
  });
});
