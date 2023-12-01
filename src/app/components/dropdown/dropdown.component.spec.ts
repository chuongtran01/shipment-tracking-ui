import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownOptions } from 'src/app/models/Dropdown';
import { DropdownService } from 'src/app/services/dropdown/dropdown.service';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let dropdownService: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
    });
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    dropdownService = TestBed.inject(DropdownService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedOption and sendSelectedOption on handleOptionSelect', () => {
    const mockOption: DropdownOptions = { id: '1', title: 'Option 1' };
    spyOn(dropdownService, 'sendSelectedOption');

    component.handleOptionSelect(mockOption.title);

    expect(component.selectedOption).toBe(mockOption.title);
    expect(dropdownService.sendSelectedOption).toHaveBeenCalledWith(
      mockOption.title
    );
  });
});
