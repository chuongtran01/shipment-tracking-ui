import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { PipelinePageComponent } from './pipeline-page.component';
import { constants } from '../../../../utils/app.constants';
import { By } from '@angular/platform-browser';
import { PipelineHeaderComponent } from 'src/app/pages/pipeline/components/pipeline-header/pipeline-header.component';
import { PipelineBodyComponent } from 'src/app/pages/pipeline/components/pipeline-body/pipeline-body.component';
import { GeneralLeftSidebarComponent } from 'src/app/components/general-left-sidebar/general-left-sidebar.component';
import { HeaderNavbarComponent } from 'src/app/components/header-navbar/header-navbar.component';
import { CreatePipelineComponent } from 'src/app/pages/pipeline/components/create-pipeline/create-pipeline.component';
import { Pipeline } from 'src/app/pages/pipeline/models/Pipeline';
import { PipelineService } from 'src/app/pages/pipeline/services/pipeline/pipeline.service';
import { CreateTeamComponent } from 'src/app/pages/pipeline/components/create-team/create-team.component';

describe('PipelinePageComponent', () => {
  let component: PipelinePageComponent;
  let fixture: ComponentFixture<PipelinePageComponent>;
  let searchBarService: SearchBarService;
  let pipelineService: PipelineService;
  const testData = 'Test Search Data';
  let CONSTANTS: any;

  let mockPipelines: Pipeline[] = [
    {
      id: 'a7c0301d-f5af-4730-9b6c-d44f99e8148e',
      createdAt: 1698935594000,
      organizationId: '1',
      name: 'pipeline 1',
      teamId: '1',
      description: 'des1',
    },
    {
      id: 'a7c0301d-f5af-4730-9b6c-d44f99e8148e',
      createdAt: 1698935594000,
      organizationId: '1',
      name: 'pipeline 2',
      teamId: '1',
      description: 'des1',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipelinePageComponent,
        PipelineHeaderComponent,
        PipelineBodyComponent,
        CreatePipelineComponent,
        GeneralLeftSidebarComponent,
        HeaderNavbarComponent,
        CreateTeamComponent,
      ],
      imports: [SharedModule, RouterTestingModule],
      providers: [SearchBarService, PipelineService],
    });
    fixture = TestBed.createComponent(PipelinePageComponent);
    component = fixture.componentInstance;

    searchBarService = TestBed.inject(SearchBarService);
    pipelineService = TestBed.inject(PipelineService);

    CONSTANTS = constants;

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const headerText = fixture.nativeElement.querySelector(
      '.pipeline-header-body-header-title'
    ).textContent;
    expect(headerText).toContain(CONSTANTS.pipeline.pipelines);

    const buttonText = fixture.nativeElement.querySelector(
      '.button-green.font-10.p-v-7.text-semibold'
    ).textContent;
    expect(buttonText).toContain(CONSTANTS.pipeline.createNew);

    const descriptionText = fixture.nativeElement.querySelector(
      '.pipeline-header-body-option.pipeline-header-body-desc'
    ).textContent;
    expect(descriptionText).toContain(CONSTANTS.pipeline.moveData);

    const searchBarPlacecholderText = fixture.debugElement.query(
      By.css('.search-bar-input.font-15')
    ).nativeElement;
    expect(searchBarPlacecholderText.getAttribute('placeholder')).toEqual(
      CONSTANTS.pipeline.searchPipelines
    );
  });

  it('should handle search input and fetch pipelines', () => {
    const searchInput = 'TestQuery';
    const currentTeam = '1';

    spyOn(searchBarService, 'receiveSearchInput').and.returnValue(
      of(searchInput)
    );
    spyOn(pipelineService, 'searchByName').and.returnValue(of(mockPipelines));

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.pipelineName).toBe(searchInput);
    expect(pipelineService.searchByName).toHaveBeenCalledWith(
      currentTeam,
      searchInput
    );
    expect(component.pipelines).toEqual(mockPipelines);
    fixture.detectChanges();
  });

  it('should handle errors when fetching pipelines', () => {
    const searchInput = 'TestQuery';
    const currentTeam = '1';
    const errorResponse = new Error('Test Error');

    spyOn(searchBarService, 'receiveSearchInput').and.returnValue(
      of(searchInput)
    );
    spyOn(pipelineService, 'searchByName').and.returnValue(
      throwError(errorResponse)
    );

    component.ngOnInit();

    expect(component.pipelineName).toBe(searchInput);
    expect(pipelineService.searchByName).toHaveBeenCalledWith(
      currentTeam,
      searchInput
    );
    expect(component.pipelines).toEqual([]);
  });

  it('should handle the Create Pipeline event', () => {
    const searchInput = 'TestQuery';
    const currentTeam = '1';

    spyOn(pipelineService, 'searchByName').and.returnValue(of(mockPipelines));

    component.pipelineName = searchInput;
    component.handleCreatePipelineEvent();

    expect(pipelineService.searchByName).toHaveBeenCalledWith(
      currentTeam,
      searchInput
    );
    expect(component.pipelines).toEqual(mockPipelines);
  });

  it('should toggle create pipeline modal', () => {
    // Test the initial state
    expect(component.showCreatePipelineModal).toBe(false);

    // Trigger the method to toggle the modal
    component.hoverCreatePipelinePopup();

    // Expect the modal to be toggled
    expect(component.showCreatePipelineModal).toBe(true);
  });

  it('should unsubscribe on component destroy', () => {
    spyOn(component.$subs, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.$subs.unsubscribe).toHaveBeenCalled();
  });
});
