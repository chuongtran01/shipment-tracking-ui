import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    });
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const checkboxInput = fixture.nativeElement.querySelector('input.checkbox-input');
    expect(checkboxInput).toBeTruthy();

    const checkboxLabel = fixture.nativeElement.querySelector('label.checkbox');
    expect(checkboxLabel).toBeTruthy();

    const checkboxIcon = fixture.nativeElement.querySelector('svg.checkbox-symbol');
    expect(checkboxIcon).toBeTruthy();
  });

  it('should emit change event when checkbox is clicked', () => {
    let emittedValue: boolean | undefined;
    component.onChange.subscribe((value) => {
      emittedValue = value;
    });

    const checkboxInput = fixture.nativeElement.querySelector('.checkbox-input');

    // Should emit the change event with correct value
    checkboxInput.click();
    expect(emittedValue).toBe(true);
  });

  it('should toggle isChecked when checkbox is clicked', () => {
    const checkboxInput = fixture.nativeElement.querySelector('.checkbox-input');

    // Should be true when clicked first time
    checkboxInput.click();
    expect(component.isChecked).toBe(true);

    // Should be false when clicked second time
    checkboxInput.click();
    expect(component.isChecked).toBe(false);
  });
});
