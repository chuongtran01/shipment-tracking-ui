import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperRowComponent } from './schema-mapper-row.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('SchemaMapperRowComponent', () => {
  let component: SchemaMapperRowComponent;
  let fixture: ComponentFixture<SchemaMapperRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaMapperRowComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(SchemaMapperRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.id = 1;
    component.sourceField = 'Demo.job';
    fixture.detectChanges();
    const elements = fixture.nativeElement;

    expect(component).toBeTruthy();
    expect(elements.querySelector('.source-field app-checkbox')).toBeTruthy();
    expect(elements.querySelector('.source-field > label').textContent).toContain('Demo.job');
    expect(elements.querySelector('.destination-field input')).toBeTruthy();
    expect(elements.querySelector('.data-type select')).toBeTruthy();
    expect(elements.querySelector('.primary-key app-checkbox')).toBeTruthy();
    expect(elements.querySelector('.sort-key app-radio-button')).toBeTruthy();
    expect(elements.querySelector('.dist-key app-radio-button')).toBeTruthy();
  });

  it('should set fieldChecked to true when source-field checkbox is checked', () => {
    component.id = 1;
    component.sourceField = 'Demo.job';
    fixture.detectChanges();
    spyOn(component, 'setFieldChecked').and.callThrough();

    const checkbox = fixture.nativeElement.querySelector('.source-field .checkbox-container input');
    checkbox.click();
    fixture.detectChanges();
    expect(component.fieldChecked).toBeTrue();

    checkbox.click();
    fixture.detectChanges();
    expect(component.fieldChecked).toBeFalse();
    expect(component.setFieldChecked).toHaveBeenCalledTimes(2);
  });

  it('should set destinationField when user types in the input', () => {
    component.id = 1;
    component.sourceField = 'Demo.job';
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('.destination-field input');
    input.value = 'demo';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.mapperRowFormGroup.value.destinationField).toBe('demo');
  });

  it('should set dataType when user selects from the dropdown', () => {
    component.id = 1;
    component.sourceField = 'Demo.job';
    fixture.detectChanges();
    const elements = fixture.nativeElement;

    const select = elements.querySelector('.data-type select');
    select.value = 'number';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.mapperRowFormGroup.value.dataType).toBe('number');
  });

  it('should set primaryKeyChecked to true when primary-key checkbox is checked', () => {
    component.id = 1;
    component.sourceField = 'Demo.job';
    fixture.detectChanges();
    spyOn(component, 'setPrimaryKeyChecked').and.callThrough();

    const checkbox = fixture.nativeElement.querySelector('.primary-key .checkbox-container input');
    checkbox.click();
    fixture.detectChanges();
    expect(component.primaryKeyChecked).toBeTrue();

    checkbox.click();
    fixture.detectChanges();
    expect(component.primaryKeyChecked).toBeFalse();
    expect(component.setPrimaryKeyChecked).toHaveBeenCalledTimes(2);
  });

  it('should set selectedRadioBtn based on which radio button is selected', () => {
    component.id = 1;
    component.sourceField = 'Demo.job';
    fixture.detectChanges();
    spyOn(component, 'setSelectedRadioBtn').and.callThrough();

    const sortKeyBtn = fixture.nativeElement.querySelector('.sort-key .radio-button input');
    const distKeyBtn = fixture.nativeElement.querySelector('.dist-key .radio-button input');

    sortKeyBtn.click();
    fixture.detectChanges();
    expect(component.mapperRowFormGroup.value.selectedRadioBtn).toBe('sort-key-1');

    distKeyBtn.click();
    fixture.detectChanges();
    expect(component.mapperRowFormGroup.value.selectedRadioBtn).toBe('dist-key-1');
    expect(component.setSelectedRadioBtn).toHaveBeenCalledTimes(2);
  });

});
