import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ConnectionTypeResponse } from 'src/app/models/Connection';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { constants } from 'src/app/utils/app.constants';
import { ConnectionTypeImageMapper } from 'src/app/utils/ConnectionTypeImageMapper';

@Component({
  selector: 'app-source-selec tion',
  templateUrl: './source-selection.component.html',
  styleUrls: ['./source-selection.component.scss'],
})
export class SourceSelectionComponent {

  protected readonly constants = constants;
  $subs: Subscription = new Subscription();

  sources: ConnectionTypeResponse[] = [];
  sourceSelected: ConnectionTypeResponse | null = null;

  faXmark = faXmark;
  faArrowLeft = faArrowLeft
  searchText: string = '';

  constructor(
    private router: Router,
    private connectionService: ConnectionService,
    private searchBarService: SearchBarService,
  ) {
    this.connectionService.getAllConnectionTypes().subscribe(data => this.sources = data);
  }

  ngOnInit(): void {
    this.$subs = this.searchBarService
      .receiveSearchInput()
      .subscribe((data) => {
        this.searchText = data;
        if (data !== '') {
          this.connectionService.getConnectionTypeByName(data).subscribe(connections => this.sources = connections);
        } else {
          this.connectionService.getAllConnectionTypes().subscribe(connections => this.sources = connections);
        }
      });
  }

  scrollCategory(categoryId: number) {
    const newUrl = `/select-source#${categoryId}`;
    this.router.navigateByUrl(newUrl);
  }

  navigateToPreviousPage() {
    this.router.navigateByUrl('/connection');
  }

  continue() {
    this.router.navigateByUrl('/connection/configure-source', { state: { typeId: this.sourceSelected?.id, typeName: this.sourceSelected?.typeName }});
  }

  productCardClicked(source: ConnectionTypeResponse) {
    this.sourceSelected = source;
  }

  getTypeImage(typeName: string): string {
    return ConnectionTypeImageMapper.getImageRoute(typeName);
  }

  isSelected(typeName: string) {
    if (this.sourceSelected?.typeName === typeName) {
      return 'selected';
    } else {
    return '';
    }
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
