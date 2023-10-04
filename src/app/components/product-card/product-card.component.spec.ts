import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const cardImage = fixture.nativeElement.querySelector('img.image');
    expect(cardImage).toBeTruthy();

    const cardTitle = fixture.nativeElement.querySelector('.product-card-title');
    expect(cardTitle).toBeTruthy();

    // If description is not provided, the element should not be rendered
    const cardDescription = fixture.nativeElement.querySelector('.product-card-description');
    expect(cardDescription).not.toBeTruthy();

    // If description is provided, element should be rendered
    component.description = 'Test Description';
    fixture.detectChanges();
    const newDescription = fixture.nativeElement.querySelector('.product-card-description');
    expect(newDescription).toBeTruthy();
  });

  it('should emit onClick event when clicked', () => {
    const onClickSpy = spyOn(component.onClick, 'emit');
    const element = fixture.nativeElement;
    element.querySelector('.product-card').click();
    fixture.detectChanges();
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should render product image', () => {
    component.img = 'test-image.jpg';
    fixture.detectChanges();
    const imageElement = fixture.nativeElement.querySelector('.image');
    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toContain('test-image.jpg');
  });

  it('should render product title', () => {
    component.title = 'Test Product';
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.product-card-title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Test Product');
  });

  it('should render product description if provided', () => {
    component.description = 'Description for Test Product';
    fixture.detectChanges();
    const descriptionElement = fixture.nativeElement.querySelector('.product-card-description');
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.textContent).toContain('Description for Test Product');
  });

  it('should apply custom classes when provided', () => {
    component.classes = 'custom-class-1 custom-class-2';
    fixture.detectChanges();
    const productCardElement = fixture.nativeElement.querySelector('.product-card');
    expect(productCardElement).toBeTruthy();
    expect(productCardElement.classList.contains('custom-class-1')).toBe(true);
    expect(productCardElement.classList.contains('custom-class-2')).toBe(true);
  });
});
