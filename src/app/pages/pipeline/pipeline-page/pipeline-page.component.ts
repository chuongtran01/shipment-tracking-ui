import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { IPipeline } from 'src/app/models/Pipeline';
import { PipelineService } from 'src/app/services/pipeline/pipeline.service';

@Component({
  selector: 'app-pipeline-page',
  templateUrl: './pipeline-page.component.html',
  styleUrls: ['./pipeline-page.component.scss'],
})
export class PipelinePageComponent implements OnInit, OnDestroy {
  _pipelineName: string = '';
  $subs: Subscription = new Subscription();
  loading: boolean = false;

  pipelines: IPipeline[] = [
    {
      id: '1',
      name: 'Pipeline 1',
      source: 'MySQL-source-new-1',
      databaseName: 'MySQL',
    },
    {
      id: '2',
      name: 'Pipeline 2',
      source: 'PostgreSQL-source-new-2',
      databaseName: 'PostgreSQL',
    },
  ];

  // pipelines: IPipeline[] = [];

  constructor(
    private searchBarService: SearchBarService,
    private pipelineService: PipelineService
  ) {}

  ngOnInit(): void {
    this.$subs.add(
      this.searchBarService.receiveSearchInput().subscribe((data) => {
        this.pipelineName = data;
      })
    );

    // TODO: Remove comment when having API set up
    // this.loading = true;

    // this.$subs.add(
    //   this.pipelineService.searchPipelines(message).subscribe({
    //     next: (response) => {
    //       this.pipelines = response;
    //       this.loading = false;
    //     },
    //     error: (error) => {
    //       console.error('Error fetching pipelines:', error);
    //       this.loading = false;
    //     }
    //   })
    // );
  }

  get pipelineName(): string {
    return this._pipelineName;
  }

  set pipelineName(value: string) {
    this._pipelineName = value;
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }

  // TODO: Remove comments when having API set up
  // fetchPipelines() {
  //   this.pipelineService.getPipelines().subscribe((data) => {
  //     this.pipelines = data;
  //   })
  // }
}
