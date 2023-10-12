import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let searchBarService: SearchBarService;

  const searchBarServiceMock = jasmine.createSpyObj('SearchBarService', [
    'sendSearchInput',
    'receiveSearchInput',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [SearchBarComponent],
      providers: [
        { provide: SearchBarService, useValue: searchBarServiceMock },
      ],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchBarService = TestBed.inject(SearchBarService);
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

  it('should send search input to SearchBarService', () => {
    const inputValue = 'Test Search';

    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(searchBarServiceMock.sendSearchInput).toHaveBeenCalledWith(
      inputValue
    );
  });
});
