import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subscription,
  switchMap,
} from 'rxjs';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { Pipeline } from 'src/app/models/Pipeline';
import { ITeam } from 'src/app/models/Team';
import { PipelineService } from 'src/app/services/pipeline/pipeline.service';
import { constants } from '../../../utils/app.constants';

@Component({
  selector: 'app-pipeline-page',
  templateUrl: './pipeline-page.component.html',
  styleUrls: ['./pipeline-page.component.scss'],
})
export class PipelinePageComponent implements OnInit, OnDestroy {
  $subs: Subscription = new Subscription();
  loading: boolean = false;
  showCreatePipelineModal: boolean = false;
  CONSTANTS = constants;
  pipelineName: string = '';
  currentTeam: string = '1';

  pipelines: Pipeline[] = [];

  teams: ITeam[] = [
    {
      id: '1',
      name: 'Team 1',
    },
    {
      id: '2',
      name: 'ADS Team',
    },
    {
      id: '3',
      name: 'XRP Team',
    },
  ];

  constructor(
    private searchBarService: SearchBarService,
    private pipelineService: PipelineService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.$subs.add(
      this.searchBarService
        .receiveSearchInput()
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((query) => {
            this.pipelineName = query;
            return this.fetchPipelines(query);
          })
        )
        .subscribe(this.handlePipelineDataSubscription())
    );
  }

  hoverCreatePipelinePopup() {
    this.showCreatePipelineModal = !this.showCreatePipelineModal;
  }

  fetchPipelines(query: string): Observable<any> {
    this.loading = true;
    this.pipelineName = query;
    const pipelineObservable =
      query.length === 0
        ? this.pipelineService.fetchAll(this.currentTeam)
        : this.pipelineService.searchByName(this.currentTeam, query);

    return pipelineObservable.pipe(
      map((data) => {
        return data.sort((a, b) => b.createdAt - a.createdAt);
      })
    );
  }

  handleCreatePipelineEvent() {
    this.fetchPipelines(this.pipelineName).subscribe(
      this.handlePipelineDataSubscription()
    );
  }

  handlePipelineDataSubscription() {
    return {
      next: (data: Pipeline[]) => {
        this.pipelines = data;
        this.loading = false;
      },
      error: (error: Error) => {
        this.loading = false;
      },
    };
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
