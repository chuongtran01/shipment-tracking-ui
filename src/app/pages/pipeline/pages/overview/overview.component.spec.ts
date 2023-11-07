import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { JobService } from '../../services/job/job.service';
import { PipelineDashboardInformationComponent } from 'src/app/pages/pipeline/components/pipeline-dashboard-information/pipeline-dashboard-information.component';
import { Team } from 'src/app/models/Team';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { PipelineService } from '../../services/pipeline/pipeline.service';
import { Pipeline } from '../../models/Pipeline';
import { Job } from '../../models/Job';
import { CreateTeamComponent } from '../../components/create-team/create-team.component';
import { OverviewJobRowComponent } from '../../components/overview-job-row/overview-job-row.component';
import { PipelineDashboardNavbarComponent } from '../../components/pipeline-dashboard-navbar/pipeline-dashboard-navbar.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let pipelineService: PipelineService;
  let jobService: JobService;
  let mockRouter: Router;

  let mockPipeline: Pipeline = {
    id: 'demo-id-1',
    createdAt: 1698935594000,
    organizationId: '1',
    name: 'pipeline-demo-1',
    teamId: '1',
    description: 'des1',
  };

  let teams: Team[] = [
    {
      id: '1',
      name: 'Team 1',
    },
    {
      id: '2',
      name: 'ADS Team',
    },
    {
      id: '3',
      name: 'XRP Team',
    },
  ];

  const mockJobs: Job[] = [
    {
      id: '1',
      createdAt: '',
      modifiedAt: '',
      createdBy: '',
      modifiedBy: '',
      name: 'Job 1',
      pipelineId: '1',
      sourceId: '1',
      destinationId: '2',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientModule],
      declarations: [
        OverviewComponent,
        PipelineDashboardInformationComponent,
        PipelineDashboardNavbarComponent,
        CreateTeamComponent,
        OverviewJobRowComponent,
      ],
      providers: [PipelineService, JobService, Router],
    });
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    component.jobs = mockJobs;
    component.pipeline = mockPipeline;
    pipelineService = TestBed.inject(PipelineService);
    jobService = TestBed.inject(JobService);
    mockRouter = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    // should display pipeline information
    const pipelineElement = fixture.debugElement.query(
      By.css('.pipeline-body-left')
    );
    expect(pipelineElement.nativeElement.textContent).toContain(
      mockPipeline.name
    );

    // should display jobs information
    const jobRowElements = fixture.debugElement.queryAll(By.css('.job-card'));

    // Expect the number of job rows to match the number of mock jobs
    expect(jobRowElements.length).toBe(mockJobs.length);

    // Check the content of each job row
    for (let i = 0; i < jobRowElements.length; i++) {
      const jobRowElement = jobRowElements[i];
      const jobNameElement = jobRowElement.query(
        By.css('.job-card-text-title')
      );

      expect(jobNameElement.nativeElement.textContent).toContain(
        mockJobs[i].name
      );
    }
  });

  it('should fetch pipeline and jobs on initialization', () => {
    spyOn(pipelineService, 'fetchById').and.returnValue(of(mockPipeline));
    spyOn(jobService, 'getJobsByPipelineId').and.returnValue(of(mockJobs));

    expect(component.pipeline).toEqual(mockPipeline);
    expect(component.jobs).toEqual(mockJobs);
  });

  it('should navigate to job configuration', () => {
    spyOn(mockRouter, 'navigate');

    component.goToConfigureJob();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../job-source'], {
      relativeTo: jasmine.any(Object),
    });
  });

  it('should getAllJobs when clicking refresh', () => {
    spyOn(component, 'getAllJobs');

    const refreshElement = fixture.debugElement.query(
      By.css('.refresh')
    ).nativeElement;

    refreshElement.click();

    expect(component.getAllJobs).toHaveBeenCalled();
  });
});
