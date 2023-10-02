import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonComponent]
    });
    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.name = "testGroup";
    component.value = "testValue";
    component.isChecked = false;
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('label');
    expect(label).toBeTruthy();

    const radioInput = fixture.nativeElement.querySelector('input[type="radio"]');
    expect(radioInput).toBeTruthy();
    expect(radioInput.name).toBe("testGroup");
    expect(radioInput.value).toBe("testValue");
    expect(radioInput.checked).toBeFalse();
  });

  it('should emit change event when radio button is clicked', () => {
    let emittedValue: string | undefined;
    component.onChange.subscribe((value) => {
      emittedValue = value;
    });
    component.value = 'testValue';
    fixture.detectChanges();

    const radioInput = fixture.nativeElement.querySelector('input[type="radio"]');

    // Should emit the change event with correct value when clicked
    radioInput.click();
    fixture.detectChanges();
    expect(emittedValue).toBe('testValue');
  });

  it('should set isChecked property based on input value', () => {
    // Initially, isChecked should be false
    expect(component.isChecked).toBe(false);

    // Set isChecked to true via input
    component.isChecked = true;
    fixture.detectChanges();

    // The radio input should also be checked
    const radioInput = fixture.nativeElement.querySelector('input[type="radio"]');
    expect(radioInput.checked).toBe(true);
  });

});
