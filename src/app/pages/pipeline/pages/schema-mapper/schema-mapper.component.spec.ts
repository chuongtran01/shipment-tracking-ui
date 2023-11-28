import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperComponent } from './schema-mapper.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PipelineService } from '../../services/pipeline/pipeline.service';
import { PipelineDashboardInformationComponent } from '../../components/pipeline-dashboard-information/pipeline-dashboard-information.component';
import { PipelineDashboardNavbarComponent } from '../../components/pipeline-dashboard-navbar/pipeline-dashboard-navbar.component';
import { SchemaMapperNavbarComponent } from '../../components/schema-mapper-navbar/schema-mapper-navbar.component';

describe('SchemaMapperComponent', () => {
  let component: SchemaMapperComponent;
  let pipelineService: PipelineService;
  let fixture: ComponentFixture<SchemaMapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchemaMapperComponent,
        SchemaMapperNavbarComponent,
        PipelineDashboardInformationComponent,
        PipelineDashboardNavbarComponent,
      ],
      imports: [SharedModule, RouterTestingModule],
      providers: [PipelineService],
    });
    fixture = TestBed.createComponent(SchemaMapperComponent);
    component = fixture.componentInstance;
    pipelineService = TestBed.inject(PipelineService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-general-left-sidebar')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-header-navbar')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-pipeline-dashboard-information')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-pipeline-dashboard-navbar')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.schema-mapper-right-container-body')).toBeTruthy();
  });
});
