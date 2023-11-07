import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PipelineDashboardNavbarComponent } from './pipeline-dashboard-navbar.component';

describe('PipelineDashboardNavbarComponent', () => {
  let component: PipelineDashboardNavbarComponent;
  let fixture: ComponentFixture<PipelineDashboardNavbarComponent>;

  let mockOptions = [
    {
      id: '1',
      title: 'Overview',
      navigate: 'overview',
      icon: '',
    },
    {
      id: '2',
      title: 'Transformations',
      navigate: 'transformations',
      icon: '',
    },
    {
      id: '3',
      title: 'Schema Mapper',
      navigate: 'schema-mapper',
      icon: '',
    },
    {
      id: '4',
      title: 'Load Status',
      navigate: 'load-status',
      icon: '',
    },
    {
      id: '5',
      title: 'Activity',
      navigate: 'activity',
      icon: '',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipelineDashboardNavbarComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(PipelineDashboardNavbarComponent);
    component = fixture.componentInstance;
    component.options = mockOptions;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of options', () => {
    const optionElements = fixture.debugElement.queryAll(
      By.css('.pipeline-dashboard-option')
    );
    expect(optionElements.length).toBe(component.options.length);
  });

  it('should set the "pipeline-dashboard-option-selected" class on the selected option', () => {
    component.selectedOption = 'overview';
    fixture.detectChanges();

    const selectedOptionElement = fixture.debugElement.query(
      By.css('.pipeline-dashboard-option-selected')
    );
    expect(selectedOptionElement).toBeTruthy();
  });
});
