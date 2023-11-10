import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ExpandingSearchBarComponent } from './expanding-search-bar.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

describe('ExpandingSearchBarComponent', () => {
  let component: ExpandingSearchBarComponent;
  let fixture: ComponentFixture<ExpandingSearchBarComponent>;
  let searchBarService: SearchBarService;

  const searchBarServiceMock = jasmine.createSpyObj('SearchBarService', [
    'sendSearchInput',
    'receiveSearchInput',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandingSearchBarComponent],
      imports: [SharedModule],
      providers: [
        { provide: SearchBarService, useValue: searchBarServiceMock },
      ],
    });
    fixture = TestBed.createComponent(ExpandingSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchBarService = TestBed.inject(SearchBarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('button.btn-search')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('fa-icon')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('input.expanding-search-input')).toBeTruthy();
  });

  it('should send search input to SearchBarService', () => {
    const inputValue = 'Test Search';
    const inputElement = fixture.nativeElement.querySelector('input.expanding-search-input');
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(searchBarServiceMock.sendSearchInput).toHaveBeenCalledWith(
      inputValue
    );
  });
});
