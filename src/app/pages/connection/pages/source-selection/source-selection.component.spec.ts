import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSelectionComponent } from './source-selection.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';
import { of } from 'rxjs';
import { ConnectionService } from '../../services/connection/connection.service';

describe('SourceSelectionComponent', () => {
  let component: SourceSelectionComponent;
  let fixture: ComponentFixture<SourceSelectionComponent>;
  let router: Router;

  const testSearch = 'MongoDB';

  const searchServiceSpy = jasmine.createSpyObj('SearchBarService', [
    'receiveSearchInput',
  ]);

  searchServiceSpy.receiveSearchInput.and.returnValue(of(testSearch));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceSelectionComponent, SearchBarComponent, ProductCardComponent],
      imports: [FontAwesomeModule, SharedModule, RouterTestingModule],
      providers: [ConnectionService]
    });
    fixture = TestBed.createComponent(SourceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.sources = [
      {
        id: "4448de1a-cfab-4c5c-b2dd-a8e9e3ca3ae6",
        createdAt: null,
        modifiedAt: null,
        createdBy: null,
        modifiedBy: null,
        typeName: "MongoDB",
        description: "Database"
    },
    {
        id: "4448de1a-cfab-4c5c-b2dd-a8e9e3ca3de3",
        createdAt: null,
        modifiedAt: null,
        createdBy: null,
        modifiedBy: null,
        typeName: "MySQL",
        description: "Database"
    }];
    fixture.detectChanges();

    const cancelButton = fixture.nativeElement.querySelector('.select-source-cancel-btn');
    expect(cancelButton).toBeTruthy();

    const title = fixture.nativeElement.querySelector('.select-source-header');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain(constants.sourceSelection.title);

    const searchBar = fixture.nativeElement.querySelector('app-search-bar');
    expect(searchBar).toBeTruthy();

    const productCard = fixture.nativeElement.querySelector('app-product-card');
    expect(productCard).toBeTruthy();

  });

  it('should navigate to "/configure-source" when clicked Continue', () => {
    const sourceSelected = {
      id: "4448de1a-cfab-4c5c-b2dd-a8e9e3ca3ae6",
      createdAt: null,
      modifiedAt: null,
      createdBy: null,
      modifiedBy: null,
      typeName: "MongoDB",
      description: "Database"
    };
    component.productCardClicked(sourceSelected);
    const continueBtn = fixture.nativeElement.querySelector('.continue-btn app-button');
    continueBtn.click();
    spyOn(component, 'continue').and.callThrough();

    expect(router.navigateByUrl).toHaveBeenCalledOnceWith("/connection/configure-source", { state: { typeId: sourceSelected.id, typeName: sourceSelected.typeName }});
  });

  it('should select a connection source when clicked', () => {
    component.sources = [
      {
        id: "4448de1a-cfab-4c5c-b2dd-a8e9e3ca3ae6",
        createdAt: null,
        modifiedAt: null,
        createdBy: null,
        modifiedBy: null,
        typeName: "MongoDB",
        description: "Database"
      },
      {
        id: "4448de1a-cfab-4c5c-b2dd-a8e9e3ca3de3",
        createdAt: null,
        modifiedAt: null,
        createdBy: null,
        modifiedBy: null,
        typeName: "MySQL",
        description: "Database"
    }];

    const sourceSelected = {
      id: "4448de1a-cfab-4c5c-b2dd-a8e9e3ca3ae6",
      createdAt: null,
      modifiedAt: null,
      createdBy: null,
      modifiedBy: null,
      typeName: "MongoDB",
      description: "Database"
    };
    spyOn(component, 'productCardClicked').and.callThrough();
    fixture.detectChanges();
    const sourceCard = fixture.nativeElement.querySelector('app-product-card div');
    sourceCard.click();

    expect(component.sourceSelected).toEqual(component.sources[0]);
    expect(component.productCardClicked).toHaveBeenCalled();
  });

  it('should unsubscribe on component destroy', () => {
    spyOn(component.$subs, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.$subs.unsubscribe).toHaveBeenCalled();
  });
});
