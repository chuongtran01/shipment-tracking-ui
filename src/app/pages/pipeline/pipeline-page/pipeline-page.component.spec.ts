import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { PipelinePageComponent } from './pipeline-page.component';
import { constants } from '../../../utils/app.constants';
import { By } from '@angular/platform-browser';
import { PipelineHeaderComponent } from 'src/app/components/pipeline-header/pipeline-header.component';
import { PipelineBodyComponent } from 'src/app/components/pipeline-body/pipeline-body.component';
import { GeneralLeftSidebarComponent } from 'src/app/components/general-left-sidebar/general-left-sidebar.component';
import { HeaderNavbarComponent } from 'src/app/components/pipeline-header-navbar/header-navbar.component';
import { CreatePipelineComponent } from 'src/app/components/create-pipeline/create-pipeline.component';

describe('PipelinePageComponent', () => {
  let component: PipelinePageComponent;
  let fixture: ComponentFixture<PipelinePageComponent>;
  let searchBarService: SearchBarService;
  const testData = 'Test Search Data';
  let CONSTANTS: any;

  const searchServiceSpy = jasmine.createSpyObj('SearchBarService', [
    'receiveSearchInput',
  ]);

  searchServiceSpy.receiveSearchInput.and.returnValue(of(testData));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipelinePageComponent,
        PipelineHeaderComponent,
        PipelineBodyComponent,
        CreatePipelineComponent,
        GeneralLeftSidebarComponent,
        HeaderNavbarComponent,
      ],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: SearchBarService, useValue: searchServiceSpy }],
    });
    fixture = TestBed.createComponent(PipelinePageComponent);
    component = fixture.componentInstance;

    searchBarService = TestBed.inject(SearchBarService);
    CONSTANTS = constants;

    fixture.detectChanges();
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

  it('should subscribe to SearchBarService and update message', () => {
    component.ngOnInit();
    expect(component.pipelineName).toEqual(testData);
  });

  it('should unsubscribe on component destroy', () => {
    spyOn(component.$subs, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.$subs.unsubscribe).toHaveBeenCalled();
  });
});
