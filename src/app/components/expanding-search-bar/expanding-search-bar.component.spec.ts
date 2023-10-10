import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ExpandingSearchBarComponent } from './expanding-search-bar.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('ExpandingSearchBarComponent', () => {
  let component: ExpandingSearchBarComponent;
  let fixture: ComponentFixture<ExpandingSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandingSearchBarComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(ExpandingSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('button.btn-search')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('fa-icon')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('input.expanding-search-input')).toBeTruthy();
  });

  it('should emit onChange event when input value changes', () => {
    const searchText = 'test search';
    spyOn(component.onChange, 'emit');

    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.expanding-search-input');
    inputElement.value = searchText;
    inputElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.onChange.emit).toHaveBeenCalledWith(searchText);
  });
});
