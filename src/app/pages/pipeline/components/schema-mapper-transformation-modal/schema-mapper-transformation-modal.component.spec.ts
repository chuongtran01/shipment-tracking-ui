import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperTransformationModalComponent } from './schema-mapper-transformation-modal.component';
import { constants } from 'src/app/utils/app.constants';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';
import { DropdownService } from 'src/app/services/dropdown/search-bar.service';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { of } from 'rxjs';

describe('SchemaMapperTransformationModalComponent', () => {
  let component: SchemaMapperTransformationModalComponent;
  let fixture: ComponentFixture<SchemaMapperTransformationModalComponent>;
  let CONSTANTS = constants;
  let dropdownService: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchemaMapperTransformationModalComponent,
        ButtonComponent,
        DropdownComponent,
      ],
      imports: [FontAwesomeModule],
      providers: [DropdownService],
    });
    fixture = TestBed.createComponent(SchemaMapperTransformationModalComponent);
    component = fixture.componentInstance;
    component.showModal = true;
    component.transformations = [];
    dropdownService = TestBed.inject(DropdownService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const addTransformationElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-navbar-option-add-transformation'
    ).textContent;

    expect(addTransformationElement).toContain(
      CONSTANTS.schemaMapper.modal.addTransformation
    );

    const filterColumnElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-navbar-option-filter'
    ).textContent;

    expect(filterColumnElement).toContain(
      CONSTANTS.schemaMapper.modal.filterColumn
    );

    const clearElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-navbar .schema-mapper-transformation-modal-navbar-option:nth-child(3) div'
    ).textContent;

    expect(clearElement).toContain(CONSTANTS.schemaMapper.modal.clear);

    const deleteElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-navbar .schema-mapper-transformation-modal-navbar-option:nth-child(4) div'
    ).textContent;

    expect(deleteElement).toContain(CONSTANTS.schemaMapper.modal.delete);

    const transformationElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-body-header div:nth-child(2)'
    ).textContent;

    expect(transformationElement).toContain(
      CONSTANTS.schemaMapper.modal.transformation
    );

    const statusElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-body-header div:nth-child(3)'
    ).textContent;

    expect(statusElement).toContain(CONSTANTS.schemaMapper.modal.status);

    const dateCreatedElement = fixture.nativeElement.querySelector(
      '.schema-mapper-transformation-modal-body-header div:nth-child(4)'
    ).textContent;

    expect(dateCreatedElement).toContain(
      CONSTANTS.schemaMapper.modal.dateCreated
    );

    const saveButton = fixture.nativeElement.querySelector(
      '.button-green.p-h-5.font-16.text-medium'
    ).textContent;

    expect(saveButton).toContain(CONSTANTS.schemaMapper.modal.save);
  });

  it('should add selected option to transformations on receiveSelectedOption', () => {
    expect(component.transformations.length).toBe(0);

    spyOn(dropdownService, 'receiveSelectedOption').and.returnValue(
      of('Mocked Transformation')
    );

    component.ngOnInit();

    expect(component.transformations.length).toBe(1);
    expect(component.transformations[0]).toBe('Mocked Transformation');
  });

  it('should handle clearing transformations', () => {
    component.transformations = ['Transformation1', 'Transformation2'];
    component.handleClear();
    expect(component.transformations.length).toBe(0);
  });

  it('should unsubscribe from subscriptions on ngOnDestroy', () => {
    spyOn(component.$subs, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.$subs.unsubscribe).toHaveBeenCalled();
  });
});
