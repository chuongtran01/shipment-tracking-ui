import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperTableComponent } from './schema-mapper-table.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('SchemaMapperTableComponent', () => {
  let component: SchemaMapperTableComponent;
  let fixture: ComponentFixture<SchemaMapperTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaMapperTableComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(SchemaMapperTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const elements = fixture.nativeElement;
    expect(component).toBeTruthy();
    expect(elements.querySelector('app-expanding-search-bar')).toBeTruthy();
    expect(elements.querySelector('app-checkbox')).toBeTruthy();

    expect(elements.querySelector('.source-field')).toBeTruthy();
    expect(elements.querySelector('.source-field').textContent).toContain('Source Field');

    expect(elements.querySelector('.destination-field')).toBeTruthy();
    expect(elements.querySelector('.destination-field').textContent).toContain('Destination Field Name');

    expect(elements.querySelector('.data-type')).toBeTruthy();
    expect(elements.querySelector('.data-type').textContent).toContain('Data Type');

    expect(elements.querySelector('.primary-key')).toBeTruthy();
    expect(elements.querySelector('.primary-key').textContent).toContain('Primary Key');

    expect(elements.querySelector('.sort-key')).toBeTruthy();
    expect(elements.querySelector('.sort-key').textContent).toContain('Sort Key');

    expect(elements.querySelector('.dist-key')).toBeTruthy();
    expect(elements.querySelector('.dist-key').textContent).toContain('Dist Key');
  });

  it('should set all rows checked', () => {
    component.setAllRowsChecked(true);
    expect(component.allRowsChecked).toBe(true);
  });

  it('should handle search change', () => {
    component.handleSearchChange('test');
    expect(component.searchValue).toBe('test');
  });

  it('should render rows correctly', () => {
    component.rows = [
      { id: 1, sourceField: 'Job1' },
      { id: 2, sourceField: 'Job2' },
      { id: 3, sourceField: 'Job3' },
      { id: 4, sourceField: 'Job4' },
    ];
    fixture.detectChanges();
    const elements = fixture.nativeElement;
    expect(elements.querySelector('.fields-available').textContent).toContain('4');
    expect(elements.querySelectorAll('app-schema-mapper-row').length).toBe(4);
    expect(elements.querySelectorAll('app-schema-mapper-row .bg-green').length).toBe(2);
    expect(elements.querySelectorAll('app-schema-mapper-row')[0].textContent).toContain('Job1');
    expect(elements.querySelectorAll('app-schema-mapper-row')[1].textContent).toContain('Job2');
  });

});
