import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStatusEventsDropdownComponent } from './load-status-events-dropdown.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('LoadStatusEventsDropdownComponent', () => {
  let component: LoadStatusEventsDropdownComponent;
  let fixture: ComponentFixture<LoadStatusEventsDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadStatusEventsDropdownComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(LoadStatusEventsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const elements = fixture.nativeElement;
    expect(component).toBeTruthy();
    expect(elements.querySelector('app-button#skipAll')).toBeTruthy();
    expect(elements.querySelector('app-button#skipAll').textContent).toContain('Skip All');
    expect(elements.querySelector('app-button#rerunAll')).toBeTruthy();
    expect(elements.querySelector('app-button#rerunAll').textContent).toContain('Rerun All');
    expect(elements.querySelector('app-expanding-search-bar')).toBeTruthy();
    expect(elements.querySelectorAll('.events-dropdown-icons > fa-icon').length).toBe(2);

    expect(elements.querySelector('.events-dropdown-results-type').textContent).toContain('Event Type');
    expect(elements.querySelector('.events-dropdown-results-replay').textContent).toContain('Events in Replay Queue');
    expect(elements.querySelector('.events-dropdown-results-error').textContent).toContain('Types of Error');

  });

  it('should handle skip all events', () => {
    spyOn(component, 'skipAllEvents');
    const skipAllButton = fixture.nativeElement.querySelector('app-button#skipAll');
    skipAllButton.click();
    fixture.detectChanges();

    expect(component.skipAllEvents).toHaveBeenCalled();
  });

  it('should handle rerun all events', () => {
    spyOn(component, 'rerunAllEvents');
    const rerunAllButton = fixture.nativeElement.querySelector('app-button#rerunAll');
    rerunAllButton.click();
    fixture.detectChanges();

    expect(component.rerunAllEvents).toHaveBeenCalled();
  });

  it('should handle refresh', () => {
    spyOn(component, 'refresh');
    const refreshButton = fixture.nativeElement.querySelector('fa-icon#refresh');
    refreshButton.click();
    fixture.detectChanges();

    expect(component.refresh).toHaveBeenCalled();
  });
});
