import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperComponent } from './schema-mapper.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SchemaMapperCreateTableComponent } from '../components/schema-mapper-create-table/schema-mapper-create-table.component';
import { SchemaMapperTableComponent } from '../components/schema-mapper-table/schema-mapper-table.component';

describe('SchemaMapperComponent', () => {
  let component: SchemaMapperComponent;
  let fixture: ComponentFixture<SchemaMapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchemaMapperComponent,
        SchemaMapperCreateTableComponent,
        SchemaMapperTableComponent
      ],
      imports: [SharedModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(SchemaMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-toggle-switch')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.schema-mapper-right-container-toggle-description')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-schema-mapper-create-table')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-schema-mapper-table')).toBeTruthy();
  });

  it('should change autoMappingChecked when the switch is toggled', () => {
    spyOn(component, 'autoMappingToggled').and.callThrough();
    const autoMappingSwitch = fixture.nativeElement.querySelector('app-toggle-switch[name="autoMapping"] .toggle-switch');

    // Toggled to be true
    autoMappingSwitch.click();
    fixture.detectChanges();
    expect(component.autoMappingChecked).toBeTrue();

    // Toggled to be false
    autoMappingSwitch.click();
    fixture.detectChanges();
    expect(component.autoMappingChecked).toBeFalse();

    expect(component.autoMappingToggled).toHaveBeenCalledTimes(2);
  });
});
