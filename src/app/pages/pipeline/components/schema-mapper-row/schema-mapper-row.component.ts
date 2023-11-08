import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schema-mapper-row',
  templateUrl: './schema-mapper-row.component.html',
  styleUrls: ['./schema-mapper-row.component.scss']
})
export class SchemaMapperRowComponent {

  @Input({required: true}) id: number | undefined = 0;
  @Input() sourceField: string = "";
  @Input() classes?: string;

  faGripVertical = faGripVertical;
  fieldChecked: boolean = false;
  primaryKeyChecked: boolean = false;

  mapperRowFormGroup = new FormGroup({
    fieldChecked: new FormControl(false),
    destinationField: new FormControl(''),
    dataType: new FormControl(''),
    primaryKeyChecked: new FormControl(false),
    selectedRadioBtn: new FormControl('sort-key-'+this.id)
  });

  ngOnInit() {
    this.mapperRowFormGroup.get('selectedRadioBtn')?.setValue('sort-key-' + this.id);
  }

  isRadioSelected(radioBtnName: string): boolean {
    return this.mapperRowFormGroup.value.selectedRadioBtn === radioBtnName;
  }

  setFieldChecked(value: boolean) {
    this.fieldChecked = value;
  }

  setPrimaryKeyChecked(value: boolean) {
    this.primaryKeyChecked = value;
  }

  setSelectedRadioBtn(value: string) {
    this.mapperRowFormGroup.value.selectedRadioBtn = value;
  }
}
