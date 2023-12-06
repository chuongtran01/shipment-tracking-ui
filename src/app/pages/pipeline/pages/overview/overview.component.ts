import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faEllipsisVertical,
  faFilter,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/pages/pipeline/models/Job';
import { JobService } from '../../services/job/job.service';

import { forkJoin, Subscription } from 'rxjs';
import { Team } from 'src/app/models/Team';
import { constants } from 'src/app/utils/app.constants';
import { Pipeline } from '../../models/Pipeline';
import { PipelineService } from '../../services/pipeline/pipeline.service';
import { Dialog } from '@angular/cdk/dialog';
import { CreateTeamComponent } from '../../components/create-team/create-team.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  pipelineId: string = '';
  $subs: Subscription = new Subscription();
  userId: string = '';
  constants = constants;
  jobs: Job[] = [];
  pipeline!: Pipeline;

  faFilter = faFilter;
  faRotateRight = faRotateRight;
  faEllipsisVertical = faEllipsisVertical;

  // TODO: Remove later
  currentTeam: string = '1';

  // TODO: Remove later
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
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private pipelineService: PipelineService,
    private dialog: Dialog
  ) {}

  ngOnInit() {
    this.$subs.add(
      this.route.params.subscribe((params) => (this.pipelineId = params['id']))
    );

    this.userId = this.getUserId();

    forkJoin({
      jobsData: this.jobService.getJobsByPipelineId(this.pipelineId),
      pipelineData: this.pipelineService.fetchById(
        this.userId,
        this.currentTeam
      ),
    }).subscribe((data) => {
      this.jobs = data.jobsData;
      this.pipeline = data.pipelineData;
    });
  }

  goToConfigureJob() {
    this.router.navigate(['../job-source'], { relativeTo: this.route });
  }

  getUserId() {
    const url = window.location.href;
    const paths = url.split('/');

    return paths[4];
  }

  getAllJobs() {
    this.jobService.getJobsByPipelineId(this.pipelineId).subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  // TODO: Get relative date (5 days ago, 2 hours ago, etc.)
  getLastUpdatedDate(date: string) {
    const newDate = new Date(date);
    return `${String(newDate.getHours())}:${String(newDate.getMinutes())}`;
  }

  openCreateTeamDialog(): void {
    const dialogTeamRef = this.dialog.open<string>(CreateTeamComponent, {
      width: '50%',
      maxWidth: '30rem',
    });

    dialogTeamRef.closed.subscribe((result) => {
      // TODO: Add logic
    });
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
