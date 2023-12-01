import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { filter, Subscription } from 'rxjs';
import { DropdownOptions } from 'src/app/models/Dropdown';
import { DropdownService } from 'src/app/services/dropdown/search-bar.service';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-schema-mapper-transformation-modal',
  templateUrl: './schema-mapper-transformation-modal.component.html',
  styleUrls: ['./schema-mapper-transformation-modal.component.scss'],
})
export class SchemaMapperTransformationModalComponent
  implements OnInit, OnDestroy
{
  @Input({ required: true }) showModal!: boolean;
  $subs: Subscription = new Subscription();
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  CONSTANTS = constants;

  // TODO: Modify options to contain proper transformation options
  options: DropdownOptions[] = [
    {
      id: '1',
      title: 'Transformation1',
    },
    {
      id: '2',
      title: 'Transformation2',
    },
    {
      id: '3',
      title: 'Transformation3',
    },
  ];

  transformations: any = [];

  constructor(private dropdownService: DropdownService) {}

  ngOnInit(): void {
    this.$subs.add(
      this.dropdownService
        .receiveSelectedOption()
        .pipe(filter((selectedOption) => selectedOption.length > 0))
        .subscribe({
          next: (data) => {
            this.transformations.push(data);
          },
        })
    );
  }

  //TODO: Modify this function to handle DELETE transformation
  handleDelete(deletedOption: string) {}

  //TODO: Modify this function to handle CLEAR all transformations
  handleClear() {
    this.transformations.length = 0;
  }

  //TODO: Modify this function to handle SAVE transformations
  handleSave() {}

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
