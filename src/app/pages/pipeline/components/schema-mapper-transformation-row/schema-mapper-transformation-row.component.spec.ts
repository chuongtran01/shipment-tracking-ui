import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperTransformationRowComponent } from './schema-mapper-transformation-row.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('SchemaMapperTransformationRowComponent', () => {
  let component: SchemaMapperTransformationRowComponent;
  let fixture: ComponentFixture<SchemaMapperTransformationRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaMapperTransformationRowComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(SchemaMapperTransformationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const elements = fixture.nativeElement;
    expect(component).toBeTruthy();
    component.date = '2021-01-01';
    component.status = 'active';
    component.mapperId = '1';
    component.transformationName = 'test';
    fixture.detectChanges();

    expect(elements.querySelector('.transformation-row app-checkbox')).toBeTruthy();
    expect(elements.querySelector('.transformation-row .transformation')).toBeTruthy();
    expect(elements.querySelector('.transformation-row .transformation').textContent).toContain('test');
    expect(elements.querySelector('.transformation-row .status')).toBeTruthy();
    expect(elements.querySelector('.transformation-row .status').textContent).toContain('Active');
    expect(elements.querySelector('.transformation-row .date')).toBeTruthy();
    expect(elements.querySelector('.transformation-row .date').textContent).toContain('2021-01-01');
    expect(elements.querySelector('.transformation-row .ellipsis')).toBeTruthy();
  });
});
