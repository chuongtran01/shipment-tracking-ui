import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { filter, Subscription } from 'rxjs';
import { DropdownOptions } from 'src/app/models/Dropdown';
import { DropdownService } from 'src/app/services/dropdown/dropdown.service';
import { constants } from 'src/app/utils/app.constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TransformationType } from '../../models/TransformationType';

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
  transformationSelectedSet = new Set<string>();

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

  transformations: TransformationType[] = [
    {
      mapperId: '1',
      transformationName: 'Transformation 1',
      status: 'active',
      date: '2023/11/11',
    },
    {
      mapperId: '2',
      transformationName: 'Transformation 2',
      status: 'queued',
      date: '2023/11/12',
    },
    {
      mapperId: '3',
      transformationName: 'Transformation 3',
      status: 'active',
      date: '2023/11/13',
    },
  ];

  constructor(private dropdownService: DropdownService) {}

  ngOnInit(): void {
    this.$subs.add(
      this.dropdownService
        .receiveSelectedOption()
        .pipe(filter((selectedOption) => selectedOption.length > 0))
        .subscribe({
          next: (data) => {
            this.transformations.push({
              mapperId: Math.floor(Math.random() * 1000000).toString(),
              transformationName: data,
              status: 'queued',
              date: '2023/11/12',
            });
          },
        })
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.transformations,
      event.previousIndex,
      event.currentIndex
    );
  }

  checkboxOnChanged(mapperId: string) {
    if (this.transformationSelectedSet.has(mapperId)) {
      this.transformationSelectedSet.delete(mapperId);
    } else {
      this.transformationSelectedSet.add(mapperId);
    }
    console.log(this.transformationSelectedSet);
  }

  //TODO: Modify this function to handle DELETE transformation
  handleDelete() {
    const transformationsToDelete = Array.from(this.transformationSelectedSet);

    this.transformations = this.transformations.filter(
      (transformation: any) =>
        !transformationsToDelete.includes(transformation.mapperId)
    );

    // Clear the selected set after deletion
    this.transformationSelectedSet.clear();
  }

  //TODO: Modify this function to handle CLEAR all transformations
  handleClear() {
    this.transformations.length = 0;
    this.transformationSelectedSet.clear();
  }

  //TODO: Modify this function to handle SAVE transformations
  handleSave() {
    console.log(this.transformations);
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
