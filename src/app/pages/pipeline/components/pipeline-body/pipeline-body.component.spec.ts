import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Pipeline } from 'src/app/pages/pipeline/models/Pipeline';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PipelineService } from 'src/app/pages/pipeline/services/pipeline/pipeline.service';
import { PipelineBodyComponent } from './pipeline-body.component';

describe('PipelineBodyComponent', () => {
  let component: PipelineBodyComponent;
  let fixture: ComponentFixture<PipelineBodyComponent>;

  let mockPipeline: Pipeline = {
    id: 'demo-id-1',
    createdAt: 1698935594000,
    organizationId: '1',
    name: 'pipeline-demo-1',
    teamId: '1',
    description: 'des1',
  };

  const pipelineServiceStub = {
    getPipelines: jasmine.createSpy('getPipelines'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, SharedModule],
      declarations: [PipelineBodyComponent],
      providers: [{ provide: PipelineService, useValue: pipelineServiceStub }],
    });
    fixture = TestBed.createComponent(PipelineBodyComponent);
    component = fixture.componentInstance;

    component.pipeline = mockPipeline;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    const pipelineNameElement = fixture.nativeElement.querySelector(
      '.pipeline-body-left'
    );
    expect(pipelineNameElement.textContent).toContain(mockPipeline.name);

    const viewButtonElement =
      fixture.nativeElement.querySelector('.button-green');

    expect(viewButtonElement.textContent).toContain('View');
  });
});
