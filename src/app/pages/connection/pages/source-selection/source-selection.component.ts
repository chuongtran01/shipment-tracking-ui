import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, Observable, Subscription, switchMap } from 'rxjs';
import { ConnectionTypeResponse } from 'src/app/pages/connection/models/Connection';
import { ConnectionService } from 'src/app/pages/connection/services/connection/connection.service';
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
    this.$subs.add(
      this.searchBarService
        .receiveSearchInput()
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((query) => {
            this.searchText = query;
            return this.fetchConnections(query);
          })
        )
        .subscribe(this.handleConnectionTypeDataSubscription())
    );
  }

  fetchConnections(query: string): Observable<any> {
    this.searchText = query;
    return query.length === 0 ?
      this.connectionService.getAllConnectionTypes()
      : this.connectionService.getConnectionTypeByName(query);
  }

  handleConnectionTypeDataSubscription() {
    return {
      next: (data: ConnectionTypeResponse[]) => {
        this.sources = data;
      },
      error: (error: Error) => {
        // TODO: Show error message
      },
    };
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
