import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from 'src/app/utils/app.constants';
import { Pipeline } from '../../models/Pipeline';
import { PipelineService } from '../../services/pipeline/pipeline.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schema-mapper',
  templateUrl: './schema-mapper.component.html',
  styleUrls: ['./schema-mapper.component.scss']
})
export class SchemaMapperComponent {

  protected readonly constants = constants;
  currentTeam: string = '1'; // TODO: Remove later
  pipeline!: Pipeline;
  pipelineId: string = '';
  $subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pipelineService: PipelineService,
  ) {}

  ngOnInit() {
    this.$subs.add(
      this.route.params.subscribe((params) => (this.pipelineId = params['id']))
    );

    this.pipelineService.fetchById(
      this.pipelineId,
      this.currentTeam
    ).subscribe(data => {
      this.pipeline = data;
    });
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
