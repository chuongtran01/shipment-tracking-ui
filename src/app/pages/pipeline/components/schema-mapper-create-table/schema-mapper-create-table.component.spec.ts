import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperCreateTableComponent } from './schema-mapper-create-table.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('SchemaMapperCreateTableComponent', () => {
  let component: SchemaMapperCreateTableComponent;
  let fixture: ComponentFixture<SchemaMapperCreateTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaMapperCreateTableComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(SchemaMapperCreateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const elements = fixture.nativeElement;
    expect(component).toBeTruthy();
    expect(elements.querySelector('input')).toBeTruthy();
    expect(elements.querySelector('.title').textContent).toContain("Table Name");
    expect(elements.querySelector('.description')).toBeTruthy();
    expect(elements.querySelector('.btn-cancel')).toBeTruthy();
    expect(elements.querySelector('.btn-cancel').textContent).toContain("Cancel");
    expect(elements.querySelector('.btn-create')).toBeTruthy();
    expect(elements.querySelector('.btn-create').textContent).toContain("Create Table & Map");
  });

  it('should call cancelCreation() when cancel button is clicked', () => {
    spyOn(component, 'cancelCreation');
    const elements = fixture.nativeElement;
    elements.querySelector('.btn-cancel app-button').click();
    expect(component.cancelCreation).toHaveBeenCalled();
  });

  it('should call createTableAndMap() when create button is clicked', () => {
    spyOn(component, 'createTableAndMap');
    const elements = fixture.nativeElement;
    elements.querySelector('.btn-create app-button').click();
    expect(component.createTableAndMap).toHaveBeenCalled();
  });
});
