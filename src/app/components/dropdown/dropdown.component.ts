import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { DropdownOptions } from 'src/app/models/Dropdown';
import { DropdownService } from 'src/app/services/dropdown/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  faGreaterThan = faGreaterThan;
  isOpen: boolean = false;
  selectedOption: string = '';
  @Input() placeholder: string = '';
  @Input() class: string = '';
  @Input({ required: true }) dropdownOptions!: DropdownOptions[];

  constructor(private dropdownService: DropdownService) {}

  handleOptionSelect(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
    this.dropdownService.sendSelectedOption(this.selectedOption);
  }
}
