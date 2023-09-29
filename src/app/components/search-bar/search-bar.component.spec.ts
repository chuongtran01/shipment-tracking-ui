import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [SearchBarComponent],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('HTML Components', () => {
    const searchBarDE = fixture.debugElement;
    const iconElement: HTMLElement = searchBarDE.query(
      By.css('.search-bar-icon')
    ).nativeElement;

    expect(iconElement).toBeTruthy();

    const inputElement: HTMLElement = searchBarDE.query(
      By.css('.search-bar-input')
    ).nativeElement;

    expect(inputElement).toBeTruthy();
  });

  it('should display the placeholder in the input field', () => {
    const placeHolderText = 'Find pipeline';
    component.placeholder = placeHolderText;
    fixture.detectChanges();
    const searchBarDE = fixture.debugElement;
    const inputElement: HTMLElement = searchBarDE.query(
      By.css('input')
    ).nativeElement;

    expect(inputElement.getAttribute('placeholder')).toEqual(placeHolderText);
  });

  it('should emit onChange event when input value changes', () => {
    const searchText = 'Sample Search';
    spyOn(component.onChange, 'emit'); // Spy on the onChange EventEmitter

    fixture.detectChanges();
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('.search-bar-input');
    inputElement.value = searchText;
    inputElement.dispatchEvent(new Event('change')); // Simulate an input change event

    expect(component.onChange.emit).toHaveBeenCalledWith(searchText);
  });
});
