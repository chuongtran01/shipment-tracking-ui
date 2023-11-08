import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEllipsisVertical, faFilter, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/pages/pipeline/models/Job';
import { JobService } from '../../services/job/job.service';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  pipelineId: string = '';
  private sub: any;
  constants = constants;
  jobs: Job[] = []

  faFilter = faFilter;
  faRotateRight = faRotateRight;
  faEllipsisVertical = faEllipsisVertical;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => (this.pipelineId = params['id']));
    this.getAllJobs();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToConfigureJob() {
    this.router.navigate(['../job-source'], { relativeTo: this.route });
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
}
