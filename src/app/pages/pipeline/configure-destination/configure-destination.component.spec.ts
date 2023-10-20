import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureDestinationComponent } from './configure-destination.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { Router } from '@angular/router';

describe('ConfigureDestinationComponent', () => {
  let component: ConfigureDestinationComponent;
  let fixture: ComponentFixture<ConfigureDestinationComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureDestinationComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(ConfigureDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.products = [{ id: 1, title: "Snowflake", img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631"}];
    const elements = fixture.nativeElement;

    const title = elements.querySelector('.configure-destination-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain(' Select Destination ');

    expect(elements.querySelector('.configure-destination-description').textContent).toContain('Select an existing destination or add a new one');
    expect(elements.querySelector('app-button[id="new-destination-btn"]')).toBeTruthy();
    expect(elements.querySelector('app-search-bar')).toBeTruthy();
    expect(elements.querySelector('app-product-card')).toBeTruthy();
    expect(elements.querySelector('app-button[id="continue-btn"]')).toBeTruthy();

  });

  it('should navigate to the previous page when back button is clicked', () => {
    component.navigateToPreviousPage();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/configure-source');
  });

  it('should cancel the process and navigate to the root page when cancel button is clicked', () => {
    component.cancelProcess();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should handle search change', () => {
    const searchText = 'test search';
    component.handleSearchChange(searchText);
    expect(component.searchText).toEqual(searchText);
  });

  it('should continue to next step when continue button is clicked', () => {
    component.continueToNextStep();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/final-settings');
  });

  it('should add new destination when add new destination button is clicked', () => {
    spyOn(component, 'addNewDestination').and.callThrough();
    component.addNewDestination();
    expect(component.addNewDestination).toHaveBeenCalled();
  });

  it('should set selected product when product is selected', () => {
    const product = 1;
    spyOn(component, 'selectProduct').and.callThrough();
    component.products = [{ id: 1, title: "Snowflake", img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631"}];
    const productSelecting = fixture.nativeElement.querySelector('app-product-card[id="product-1"] .product-card');
    productSelecting.click();
    fixture.detectChanges();
    
    expect(component.selectProduct).toHaveBeenCalled();
    expect(component.selectedProduct).toEqual(1);
  });
});
