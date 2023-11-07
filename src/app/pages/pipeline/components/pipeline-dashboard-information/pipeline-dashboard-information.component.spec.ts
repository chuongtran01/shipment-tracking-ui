import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Pipeline } from 'src/app/pages/pipeline/models/Pipeline';

import { PipelineDashboardInformationComponent } from './pipeline-dashboard-information.component';

describe('PipelineDashboardInformationComponent', () => {
  let component: PipelineDashboardInformationComponent;
  let fixture: ComponentFixture<PipelineDashboardInformationComponent>;

  let mockPipeline: Pipeline = {
    id: 'demo-id-1',
    createdAt: 1698935594000,
    organizationId: '1',
    name: 'pipeline-demo-1',
    teamId: '1',
    description: 'des1',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, SharedModule],
      declarations: [PipelineDashboardInformationComponent],
    });
    fixture = TestBed.createComponent(PipelineDashboardInformationComponent);
    component = fixture.componentInstance;

    component.pipeline = mockPipeline;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the pipeline name', () => {
    const pipelineNameElement = fixture.debugElement.query(
      By.css('.pipeline-body-left')
    );
    expect(pipelineNameElement.nativeElement.textContent).toContain(
      mockPipeline.name
    );
  });

  it('should display the correct information in the right section', () => {
    const rightSection = fixture.debugElement.query(
      By.css('.pipeline-body-right')
    );

    // Verify the title
    const titleTop = rightSection.query(
      By.css('.pipeline-body-right-title-top')
    );
    const titleBottom = rightSection.query(
      By.css('.pipeline-body-right-title-bottom')
    );
    expect(titleTop.nativeElement.textContent).toContain('MySQL');
    expect(titleBottom.nativeElement.textContent).toContain('PostgreSQL');
    expect(titleBottom.nativeElement.textContent).toContain(
      'Ingests every 15 minutes'
    );

    // Verify the buttons
    const buttons = rightSection.query(By.css('.pipeline-body-right-buttons'));
    const activeButton = buttons.query(By.css('.pipeline-body-right-active'));
    const pauseButton = buttons.query(
      By.css('.pipeline-body-right-buttons-pause-icon')
    );
    expect(activeButton.nativeElement.textContent).toContain('Active');
    expect(pauseButton.nativeElement).toBeTruthy();
  });
});
