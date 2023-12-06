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
import { Pipeline } from 'src/app/pages/pipeline/models/Pipeline';
import { Team } from 'src/app/models/Team';
import { PipelineService } from 'src/app/pages/pipeline/services/pipeline/pipeline.service';
import { constants } from '../../../../utils/app.constants';

import { Dialog } from '@angular/cdk/dialog';
import { CreatePipelineComponent } from '../../components/create-pipeline/create-pipeline.component';
import { CreateTeamComponent } from '../../components/create-team/create-team.component';

@Component({
  selector: 'app-pipeline-page',
  templateUrl: './pipeline-page.component.html',
  styleUrls: ['./pipeline-page.component.scss'],
})
export class PipelinePageComponent implements OnInit, OnDestroy {
  $subs: Subscription = new Subscription();
  loading: boolean = false;
  CONSTANTS = constants;
  pipelineName: string = '';
  currentTeam: string = '1';

  pipelines: Pipeline[] = [];

  teams: Team[] = [
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
    private pipelineService: PipelineService,
    private dialog: Dialog
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

  fetchPipelines(query: string): Observable<any> {
    this.loading = true;
    this.pipelineName = query;
    const pipelineObservable = this.pipelineService.searchByName(query);

    return pipelineObservable.pipe(
      map((data) => {
        return data.sort((a, b) => b.createdAt - a.createdAt);
      })
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

  openCreatePipelineDialog(): void {
    const dialogPipelineRef = this.dialog.open<string>(
      CreatePipelineComponent,
      {
        width: '50%',
        maxWidth: '30rem',
      }
    );

    dialogPipelineRef.closed.subscribe((result) => {
      if (result === 'success') {
        this.fetchPipelines(this.pipelineName).subscribe(
          this.handlePipelineDataSubscription()
        );
      }
    });
  }

  openCreateTeamDialog(): void {
    const dialogTeamRef = this.dialog.open<string>(CreateTeamComponent, {
      width: '50%',
      maxWidth: '30rem',
    });

    dialogTeamRef.closed.subscribe((result) => {
      if (result === 'success') {
      }
    });
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
