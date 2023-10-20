import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSelectionComponent } from './source-selection.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SourceSelectionComponent', () => {
  let component: SourceSelectionComponent;
  let fixture: ComponentFixture<SourceSelectionComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceSelectionComponent, SearchBarComponent, ProductCardComponent],
      imports: [FontAwesomeModule, SharedModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(SourceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.categories = [{id: 1, title: "Popular"}, {id: 2, title: "Data bases"}, {id: 3, title: "CRM"}]
    component.sources = [{ id: 1, title: "Salesforce", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png", type: "CRM" }, { id: 2, title: "Microsoft SQL", img: "https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png", type: "DataBase" }]

    const cancelButton = fixture.nativeElement.querySelector('.select-source-cancel-btn');
    expect(cancelButton).toBeTruthy();

    const title = fixture.nativeElement.querySelector('.select-source-search');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Select Source');

    const searchBar = fixture.nativeElement.querySelector('app-search-bar');
    expect(searchBar).toBeTruthy();

    const leftScroll = fixture.nativeElement.querySelector('.select-source-left-container-scroll');
    expect(leftScroll).toBeTruthy();

    const categoryTab = fixture.nativeElement.querySelector('.select-source-category-link');
    expect(categoryTab).toBeTruthy();

    const categoriesContainer = fixture.nativeElement.querySelector('.select-source-categories');
    expect(categoriesContainer).toBeTruthy();

    const productCard = fixture.nativeElement.querySelector('app-product-card');
    expect(productCard).toBeTruthy();

  });

  it('should navigate to "/configure-source" when a product card is clicked', () => {
    component.productCardClicked();
    expect(router.navigateByUrl).toHaveBeenCalledOnceWith("/configure-source");
  });

  it('should handle search change', () => {
    const searchText = 'test search';
    component.handleSearchChange(searchText);
    expect(component.searchText).toEqual(searchText);
  });

  it('should show the selected category clicked', () => {
    component.categories = [{id: 1, title: "Popular"}, {id: 2, title: "Data bases"}, {id: 3, title: "CRM"}]
    component.sources = [{ id: 1, title: "Salesforce", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png", type: "CRM" }, { id: 2, title: "Microsoft SQL", img: "https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png", type: "DataBase" }]
    fixture.detectChanges();

    const navItem = fixture.nativeElement.querySelector('.select-source-category-btn');
    navItem.addEventListener('click', (event: any) => {
      event.preventDefault();
    });
    const navItemId = '1';
    fixture.detectChanges();
    navItem.click();

    const expectedUrl = `/select-source#${navItemId}`;
    expect(router.navigateByUrl).toHaveBeenCalledWith(expectedUrl);

  });
});
