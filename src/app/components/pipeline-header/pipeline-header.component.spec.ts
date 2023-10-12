import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { constants } from '../../utils/app.constants';
import { ButtonComponent } from '../button/button.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { PipelineHeaderComponent } from './pipeline-header.component';

describe('PipelineHeaderComponent', () => {
  let component: PipelineHeaderComponent;
  let fixture: ComponentFixture<PipelineHeaderComponent>;
  let CONSTANTS = constants;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [PipelineHeaderComponent],
    });
    fixture = TestBed.createComponent(PipelineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const titleElement = fixture.debugElement.query(
      By.css('.pipeline-header-body-header-title')
    );
    expect(titleElement.nativeElement.textContent).toContain(
      CONSTANTS.pipeline.pipelines
    );

    const descriptionElement = fixture.debugElement.query(
      By.css('.pipeline-header-body-option.pipeline-header-body-desc')
    );
    expect(descriptionElement.nativeElement.textContent).toContain(
      CONSTANTS.pipeline.moveData
    );

    const buttonElement = fixture.debugElement.query(
      By.directive(ButtonComponent)
    );
    expect(buttonElement.nativeElement.textContent).toBe(
      CONSTANTS.pipeline.createNew
    );

    const searchBarElement = fixture.debugElement.query(
      By.directive(SearchBarComponent)
    );
    expect(searchBarElement.nativeElement).toBeTruthy();

    const filterStatusElement = fixture.debugElement.query(
      By.css('.pipeline-header-body-filter-status-context')
    );
    expect(filterStatusElement.nativeElement.textContent).toContain(
      CONSTANTS.pipeline.status
    );
  });
});
