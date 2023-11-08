import { Component, Input } from '@angular/core';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-schema-mapper-table',
  templateUrl: './schema-mapper-table.component.html',
  styleUrls: ['./schema-mapper-table.component.scss'],
})
export class SchemaMapperTableComponent {

  @Input() rows: any = []; // TODO: Fetch real data from backend and create a model for it

  // Example data for testing page look:
  // @Input() rows = [{id: 1, sourceField: 'Job1'}, {id: 2, sourceField: 'Job2'}, {id: 3, sourceField: 'Job3'}, {id: 4, sourceField: 'Job4'}];

  constants = constants;
  allRowsChecked: boolean = false;
  searchValue: string = "";

  setAllRowsChecked(value: boolean) {
    this.allRowsChecked = value;
    // TODO: Check or uncheck all rows when checkbox is clicked
  }

  handleSearchChange(value: string) {
    this.searchValue = value;
    // TODO: handle results shown when search input changes
  };
}
