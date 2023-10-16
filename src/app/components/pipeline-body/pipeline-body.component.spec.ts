import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IPipeline } from 'src/app/models/Pipeline';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PipelineService } from 'src/app/services/pipeline/pipeline.service';
import { PipelineBodyComponent } from './pipeline-body.component';

describe('PipelineBodyComponent', () => {
  let component: PipelineBodyComponent;
  let fixture: ComponentFixture<PipelineBodyComponent>;

  let mockPipeline: IPipeline = {
    id: '1',
    name: 'Pipeline 1',
    source: 'MySQL-source-new-1',
    databaseName: 'MySQL',
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

    const pipelineSourceElement = fixture.nativeElement.querySelector(
      '.pipeline-body-right-title-top'
    );
    expect(pipelineSourceElement.textContent).toContain(mockPipeline.source);

    const pipelineDatabaseNameElement = fixture.nativeElement.querySelector(
      '.pipeline-body-right-title-bottom-database-name'
    );
    expect(pipelineDatabaseNameElement.textContent).toContain(
      mockPipeline.databaseName
    );

    const viewButtonElement =
      fixture.nativeElement.querySelector('.button-green');

    expect(viewButtonElement.textContent).toContain('View');
  });
});
