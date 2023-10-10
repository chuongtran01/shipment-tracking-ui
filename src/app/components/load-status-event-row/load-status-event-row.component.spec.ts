import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStatusEventRowComponent } from './load-status-event-row.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('LoadStatusEventRowComponent', () => {
  let component: LoadStatusEventRowComponent;
  let fixture: ComponentFixture<LoadStatusEventRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadStatusEventRowComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(LoadStatusEventRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const events = [
      {eventNumber: 8, eventType: "MAPPER", eventDescription: "Data validation. Failed for field: name: String more than 64 characters not allowed"},
      {eventNumber: 8, eventType: "MAPPER", eventDescription: "Found unmapped fields in event type: Employee_Records_Updated"},
    ];
    const elements = fixture.nativeElement;
    component.events = events;
    component.eventTitle = 'Employee_Records_Updated';
    component.eventTypeNumber = 2;
    component.totalEventNumber = 16;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(elements.querySelector('.event-row-bar')).toBeTruthy();
    expect(elements.querySelector('.event-row-bar .type')).toBeTruthy();
    expect(elements.querySelector('.event-row-bar .type').textContent).toContain('Employee_Records_Updated');
    expect(elements.querySelector('.event-row-bar .replay')).toBeTruthy();
    expect(elements.querySelector('.event-row-bar .replay').textContent).toContain('16');
    expect(elements.querySelector('.event-row-bar .error')).toBeTruthy();
    expect(elements.querySelector('.event-row-bar .error').textContent).toContain('2');

    expect(elements.querySelector('.event-row-content')).toBeTruthy();
    expect(elements.querySelectorAll('.event-row-content .event').length).toEqual(2);
    expect(elements.querySelector('.info .events')).toBeTruthy();
    expect(elements.querySelector('.info .events').textContent).toContain('8');
    expect(elements.querySelector('.info .type')).toBeTruthy();
    expect(elements.querySelector('.info .type').textContent).toContain('MAPPER');
    expect(elements.querySelector('.info .description')).toBeTruthy();
    expect(elements.querySelector('.info .description').textContent).toContain('Data validation. Failed for field: name: String more than 64 characters not allowed');

    expect(elements.querySelectorAll('.event-row-text-btn').length).toBe(6);
    expect(elements.querySelectorAll('#rerunEvent')).toBeTruthy();
    expect(elements.querySelectorAll('#skipEvent')).toBeTruthy();
    expect(elements.querySelectorAll('#viewSample')).toBeTruthy();
  });

  it('should change collapse state when clicked on row', () => {
    spyOn(component, 'changeCollapseState').and.callThrough();
    expect(component.isCollapsed).toBeTruthy();
    const row = fixture.nativeElement.querySelector('.event-row-bar');
    row.click();
    expect(component.isCollapsed).toBeFalsy();
    expect(component.changeCollapseState).toHaveBeenCalled();
  });

  it('should call rerun event when clicked', () => {
    component.events = [{eventNumber: 8, eventType: "MAPPER", eventDescription: "Data validation. Failed for field: name: String more than 64 characters not allowed"}];
    component.eventTitle = 'Employee_Records_Updated';
    component.eventTypeNumber = 2;
    component.totalEventNumber = 16;
    fixture.detectChanges();

    spyOn(component, 'rerunEvent').and.callThrough();
    const rerunEventBtn = fixture.nativeElement.querySelector('#rerunEvent');
    rerunEventBtn.click();
    expect(component.rerunEvent).toHaveBeenCalled();
  });

  it('should call skip event when clicked', () => {
    component.events = [{eventNumber: 8, eventType: "MAPPER", eventDescription: "Data validation. Failed for field: name: String more than 64 characters not allowed"}];
    component.eventTitle = 'Employee_Records_Updated';
    component.eventTypeNumber = 2;
    component.totalEventNumber = 16;
    fixture.detectChanges();

    spyOn(component, 'skipEvent').and.callThrough();
    const skipEventBtn = fixture.nativeElement.querySelector('#skipEvent');
    skipEventBtn.click();
    expect(component.skipEvent).toHaveBeenCalled();
  });

  it('should call view sample when clicked', () => {
    component.events = [{eventNumber: 8, eventType: "MAPPER", eventDescription: "Data validation. Failed for field: name: String more than 64 characters not allowed"}];
    component.eventTitle = 'Employee_Records_Updated';
    component.eventTypeNumber = 2;
    component.totalEventNumber = 16;
    fixture.detectChanges();

    spyOn(component, 'viewEventSample').and.callThrough();
    const viewSampleBtn = fixture.nativeElement.querySelector('#viewSample');
    viewSampleBtn.click();
    expect(component.viewEventSample).toHaveBeenCalled();
  });
});
