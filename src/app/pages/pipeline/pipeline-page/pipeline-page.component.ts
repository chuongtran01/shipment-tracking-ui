import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-pipeline-page',
  templateUrl: './pipeline-page.component.html',
  styleUrls: ['./pipeline-page.component.scss'],
})
export class PipelinePageComponent implements OnInit, OnDestroy {
  _message: string = '';
  $subs: Subscription = new Subscription();

  constructor(private searchBarService: SearchBarService) {}

  ngOnInit(): void {
    this.$subs = this.searchBarService
      .receiveSearchInput()
      .subscribe((data) => {
        this.message = data;
      });
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
