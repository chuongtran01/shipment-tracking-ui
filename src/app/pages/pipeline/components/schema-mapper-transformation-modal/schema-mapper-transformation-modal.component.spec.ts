import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaMapperTransformationModalComponent } from './schema-mapper-transformation-modal.component';
import { constants } from 'src/app/utils/app.constants';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';

describe('SchemaMapperTransformationModalComponent', () => {
  let component: SchemaMapperTransformationModalComponent;
  let fixture: ComponentFixture<SchemaMapperTransformationModalComponent>;
  let CONSTANTS = constants;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaMapperTransformationModalComponent, ButtonComponent],
      imports: [FontAwesomeModule],
    });
    fixture = TestBed.createComponent(SchemaMapperTransformationModalComponent);
    component = fixture.componentInstance;
    component.showModal = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const addTransformationElement = fixture.nativeElement.querySelector(
      '.button-green.p-v-5.p-h-10'
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
});
