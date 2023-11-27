import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SchemaMapperNavbarComponent } from './schema-mapper-navbar.component';
import { constants } from '../../../../utils/app.constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('SchemaMapperNavbarComponent', () => {
  let component: SchemaMapperNavbarComponent;
  let fixture: ComponentFixture<SchemaMapperNavbarComponent>;
  let CONSTANTS = constants;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaMapperNavbarComponent],
      imports: [FontAwesomeModule, SharedModule],
    });
    fixture = TestBed.createComponent(SchemaMapperNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const importSchemaElement = fixture.debugElement.query(
      By.css('.schema-mapper-navbar-left-button-import')
    );

    expect(importSchemaElement.nativeElement.innerHTML).toContain(
      CONSTANTS.schemaMapper.navbar.importSchemas
    );

    const previewSource = fixture.debugElement.query(
      By.css('.schema-mapper-navbar-left-button-preview')
    );

    expect(previewSource.nativeElement.innerHTML).toContain(
      CONSTANTS.schemaMapper.navbar.previewSource
    );

    const newMapping = fixture.debugElement.query(
      By.css(
        '.schema-mapper-navbar-left .schema-mapper-navbar-left-option:nth-child(3) div'
      )
    );

    expect(newMapping.nativeElement.innerHTML).toContain(
      CONSTANTS.schemaMapper.navbar.newMapping
    );

    const clear = fixture.debugElement.query(
      By.css(
        '.schema-mapper-navbar-left .schema-mapper-navbar-left-option:nth-child(4) div'
      )
    );

    expect(clear.nativeElement.innerHTML).toContain(
      CONSTANTS.schemaMapper.navbar.clear
    );

    const deleteElement = fixture.debugElement.query(
      By.css(
        '.schema-mapper-navbar-left .schema-mapper-navbar-left-option:nth-child(5) div'
      )
    );

    expect(deleteElement.nativeElement.innerHTML).toContain(
      CONSTANTS.schemaMapper.navbar.delete
    );

    const reviewDeploy = fixture.debugElement.query(
      By.css('.button-green div')
    );

    expect(reviewDeploy.nativeElement.innerHTML).toContain('Review');
    expect(reviewDeploy.nativeElement.innerHTML).toContain('Deploy');
  });
});
