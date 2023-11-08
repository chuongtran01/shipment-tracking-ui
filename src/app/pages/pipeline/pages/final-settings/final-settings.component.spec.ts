import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalSettingsComponent } from './final-settings.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

describe('FinalSettingsComponent', () => {
  let component: FinalSettingsComponent;
  let fixture: ComponentFixture<FinalSettingsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalSettingsComponent],
      imports: [SharedModule, RouterTestingModule, CommonModule],
    });
    fixture = TestBed.createComponent(FinalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const elements = fixture.nativeElement;
    expect(elements.querySelector('.final-settings-title')).toBeTruthy();
    expect(elements.querySelector('.final-settings-title').textContent).toContain('Final Settings');
    expect(elements.querySelector('label[htmlFor="table-prefix"]')).toBeTruthy();

    expect(elements.querySelector('input[id="table-prefix"]')).toBeTruthy();
    expect(elements.querySelector('app-toggle-switch[name="auto-mapping"]')).toBeTruthy();
    expect(elements.querySelector('app-toggle-switch[name="replicate-fields"]')).toBeTruthy();
    expect(elements.querySelector('app-button[id="continue-btn"]')).toBeTruthy();
    expect(elements.querySelector('app-button[id="continue-btn"]').textContent).toContain("Continue");
  });

  it('should navigate to the previous page when back button is clicked', () => {
    component.navigateToPreviousPage();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/configure-destination');
  });

  it('should cancel the process and navigate to the root page when cancel button is clicked', () => {
    component.cancelProcess();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should call continue if field is valid', () => {
    spyOn(component, 'continueToNextPage');
    component.finalSettingsFormGroup.setValue({
      tablePrefix: 'test',
    });

    const continueButton = fixture.nativeElement.querySelector('app-button[id="continue-btn"]');
    continueButton.click();
    fixture.detectChanges();

    expect(component.finalSettingsFormGroup.valid).toBeTrue();
    expect(component.continueToNextPage).toHaveBeenCalled();
  });

  it('should change autoMappingChecked when the switch is toggled', () => {
    spyOn(component, 'setAutoMapping').and.callThrough();
    const autoMappingSwitch = fixture.nativeElement.querySelector('app-toggle-switch[name="auto-mapping"] .toggle-switch');

    // Toggled to be true
    autoMappingSwitch.click();
    fixture.detectChanges();
    expect(component.autoMappingChecked).toBeTrue();

    // Toggled to be false
    autoMappingSwitch.click();
    fixture.detectChanges();
    expect(component.autoMappingChecked).toBeFalse();

    expect(component.setAutoMapping).toHaveBeenCalledTimes(2);
  });

  it('should change replicateFieldsChecked when the switch is toggled', () => {
    spyOn(component, 'setReplicateFields').and.callThrough();
    const replicateFieldsSwitch = fixture.nativeElement.querySelector('app-toggle-switch[name="replicate-fields"] .toggle-switch');

    // Toggled to be true
    replicateFieldsSwitch.click();
    fixture.detectChanges();
    expect(component.replicateFieldsChecked).toBeTrue();

    // Toggled to be false
    replicateFieldsSwitch.click();
    fixture.detectChanges();
    expect(component.replicateFieldsChecked).toBeFalse();

    expect(component.setReplicateFields).toHaveBeenCalledTimes(2);
  });


});
