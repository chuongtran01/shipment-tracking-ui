import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-schema-mapper',
  templateUrl: './schema-mapper.component.html',
  styleUrls: ['./schema-mapper.component.scss']
})
export class SchemaMapperComponent {

  protected readonly constants = constants;
  mappingFields: any[] = []; // TODO: Define data model for schema mapper fields
  autoMappingChecked = false;

  constructor(
    private router: Router,
  ) {
    // TODO: Call backend API to get schema mapping fields
    this.mappingFields = []
  }

  autoMappingToggled(value: boolean) {
    this.autoMappingChecked = value;
  }
}
