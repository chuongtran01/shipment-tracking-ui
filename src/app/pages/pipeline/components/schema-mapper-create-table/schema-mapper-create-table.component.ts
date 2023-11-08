import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-schema-mapper-create-table',
  templateUrl: './schema-mapper-create-table.component.html',
  styleUrls: ['./schema-mapper-create-table.component.scss']
})
export class SchemaMapperCreateTableComponent {

  constants = constants;

  mapperCreateTableFormGroup = new FormGroup({
    tableName: new FormControl(''),
  });

  cancelCreation() {
    // TODO: Create cancelation logic
  }

  createTableAndMap() {
    // TODO: Create table and map logic
  }
}
