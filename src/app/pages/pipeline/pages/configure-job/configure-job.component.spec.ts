import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureJobComponent } from './configure-job.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { PipelineService } from 'src/app/pages/pipeline/services/pipeline/pipeline.service';
import { JobService } from '../../services/job/job.service';
import { ConnectionService } from 'src/app/pages/connection/services/connection/connection.service';

describe('ConfigureJobComponent', () => {
  let component: ConfigureJobComponent;
  let fixture: ComponentFixture<ConfigureJobComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let jobService: JobService;
  let CONSTANTS: any;

  const JobServiceStub = {
    createJob: jasmine.createSpy('createJob'),
  };

  JobServiceStub.createJob
    .withArgs({
      name: 'My New Job',
      pipelineId: '1',
      sourceId: '2',
      destinationId: '3',
    })
    .and.returnValue(of({
      id: '1',
      createdAt: "2023-10-31 13:39:34",
      modifiedAt: "2023-10-31 13:39:34",
      createdBy: "2023-10-31 13:39:34",
      modifiedBy: "2023-10-31 13:39:34",
      name: 'My New Job',
      pipelineId: '1',
      sourceId: '2',
      destinationId: '3',
    }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureJobComponent],
      imports: [SharedModule, RouterTestingModule, HttpClientModule],
      providers: [
        ConnectionService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: of({ selectType: 'source' }), // Ensure data property is defined
            },
            params: of({ id: '1', connectionId: '2', jobName: 'My%20New%20Job' }),
            data: of({ selectType: 'source' }),
            url: of([{ path: 'pipeline' }]),
          },
        },
        {provide: JobService, useValue: JobServiceStub},
      ],
    });
    fixture = TestBed.createComponent(ConfigureJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    jobService = TestBed.inject(JobService);
    CONSTANTS = constants;
    spyOn(router, 'navigateByUrl').and.stub();
    spyOn(router, 'navigate').and.stub();
    spyOn(history, 'back').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.connections = [{
      id: "57c3bce9-6126-48bd-af01-1547173e4961",
      createdAt: "2023-10-31 13:39:34",
      modifiedAt: "2023-10-31 13:39:34",
      createdBy: "2023-10-31 13:39:34",
      modifiedBy: "2023-10-31 13:39:34",
      organizationId: "demo-org-1",
      connectionName: "Connection 1",
      teamId: "1",
      connectionTypeId: "57c3bce9-6126-48bd-af01-1547173e4961",
      connectionTypeName: "PostgreSQL",
      connectionString: "",
    }];
    const elements = fixture.nativeElement;
    fixture.detectChanges();

    const title = elements.querySelector('.configure-job-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain(CONSTANTS.pipeline.createJob);
    expect(elements.querySelector('.configure-job-description').textContent).toContain(CONSTANTS.pipeline.jobSourceDescription);
    expect(elements.querySelector('app-button[id="new-destination-btn"]')).toBeTruthy();
    expect(elements.querySelector('app-button[id="new-destination-btn"] button').textContent).toContain(CONSTANTS.pipeline.addNewConnection);
    expect(elements.querySelector('input')).toBeTruthy();
    expect(elements.querySelector('app-product-card')).toBeTruthy();
    expect(elements.querySelector('app-button[id="continue-btn"]')).toBeTruthy();

    component.selectType = 'destination';
    fixture.detectChanges();
    expect(elements.querySelector('.configure-job-title')).toBeTruthy();
    expect(elements.querySelector('.configure-job-title').textContent).toContain(CONSTANTS.pipeline.selectJobDestination);
    expect(elements.querySelector('.configure-job-description').textContent).toContain(CONSTANTS.pipeline.jobDestinationDescription);
    expect(elements.querySelector('app-button[id="new-destination-btn"] button')).toBeTruthy();
    expect(elements.querySelector('app-button[id="new-destination-btn"] button').textContent).toContain(CONSTANTS.pipeline.addNewDestination);
    expect(elements.querySelector('input')).toBeFalsy();

  });

  it('should navigate to the previous page when back button is clicked', () => {
    component.navigateToPreviousPage();
    expect(history.back).toHaveBeenCalled();
  });

  it('should cancel the process and navigate to the root page when cancel button is clicked', () => {
    component.cancelProcess();
    component.pipelineId = '1';
    fixture.detectChanges();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/pipeline/1/overview');
  });

  it('should continue to next step when continue button is clicked', () => {
    component.selectedConnection = '3';
    component.configureJobFormGroup.setValue({jobName: 'My New Job'});
    fixture.detectChanges();
    component.continueToNextStep();

    expect(router.navigate).toHaveBeenCalledWith(['../job-destination', component.selectedConnection, 'My%20New%20Job'], { relativeTo: route });
  });

  it('should add new connection when add new connection button is clicked', () => {
    spyOn(component, 'addNewConnection').and.callThrough();
    component.addNewConnection();
    expect(component.addNewConnection).toHaveBeenCalled();
  });

  it('should set selected product when product is selected', () => {
    spyOn(component, 'selectConnection').and.callThrough();
    component.connections = [{
      id: "57c3bce9-6126-48bd-af01-1547173e4961",
      createdAt: "2023-10-31 13:39:34",
      modifiedAt: "2023-10-31 13:39:34",
      createdBy: "2023-10-31 13:39:34",
      modifiedBy: "2023-10-31 13:39:34",
      organizationId: "demo-org-1",
      connectionName: "Connection 1",
      teamId: "1",
      connectionTypeId: "57c3bce9-6126-48bd-af01-1547173e4961",
      connectionTypeName: "PostgreSQL",
      connectionString: "",
    }];
    fixture.detectChanges();
    const productSelecting = fixture.nativeElement.querySelector('app-product-card[id="product-57c3bce9-6126-48bd-af01-1547173e4961"] .product-card');
    productSelecting.click();
    fixture.detectChanges();

    expect(component.selectConnection).toHaveBeenCalled();
    expect(component.selectedConnection).toEqual("57c3bce9-6126-48bd-af01-1547173e4961");
  });
});
