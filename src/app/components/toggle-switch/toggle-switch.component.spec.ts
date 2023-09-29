import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchComponent } from './toggle-switch.component';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleSwitchComponent]
    });
    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.name = 'test';
    component.isChecked = true;
    fixture.detectChanges();

    const toggleSwitchInput = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(toggleSwitchInput).toBeTruthy();
    expect(toggleSwitchInput.checked).toBe(true);
    expect(toggleSwitchInput.name).toBe('test');
    expect(toggleSwitchInput.id).toBe('test');

    const toggleSwitchLabel = fixture.nativeElement.querySelector('.toggle-switch-label');
    expect(toggleSwitchLabel).toBeTruthy();

    const toggleSwitchInner = fixture.nativeElement.querySelector('.toggle-switch-inner');
    expect(toggleSwitchInner).toBeTruthy();
    const toggleSwitchSwitch = fixture.nativeElement.querySelector('.toggle-switch-switch');
    expect(toggleSwitchSwitch).toBeTruthy();
  });

  it('should emit switchToggled event when toggle switch is clicked', () => {
    let emittedValue: boolean | undefined;
    component.switchToggled.subscribe((value) => {
      emittedValue = value;
    });

    const toggleSwitchInput = fixture.nativeElement.querySelector('.toggle-switch');

    // Should emit the change event with correct value
    toggleSwitchInput.click();
    expect(emittedValue).toBe(true);
  });

  it('should toggle the checked property when toggle switch is clicked', () => {
    const toggleSwitchInput = fixture.nativeElement.querySelector('.toggle-switch');

    // Should be true when clicked first time
    toggleSwitchInput.click();
    fixture.detectChanges();
    expect(component.isChecked).toBe(true);

    // Should be false when clicked second time
    toggleSwitchInput.click();
    fixture.detectChanges();
    expect(component.isChecked).toBe(false);
  });
});
