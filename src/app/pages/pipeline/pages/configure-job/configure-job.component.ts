import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ConnectionResponse } from 'src/app/pages/connection/models/Connection';
import { ConnectionService } from 'src/app/pages/connection/services/connection/connection.service';
import { ConnectionTypeImageMapper } from 'src/app/utils/ConnectionTypeImageMapper';
import { constants } from 'src/app/utils/app.constants';
import { JobService } from '../../services/job/job.service';

@Component({
  selector: 'app-configure-job',
  templateUrl: './configure-job.component.html',
  styleUrls: ['./configure-job.component.scss']
})
export class ConfigureJobComponent implements OnInit {

  protected readonly constants = constants;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;

  connections: ConnectionResponse[] = [];
  searchText: string = '';
  selectedConnection: string | null = null;
  selectType: 'source' | 'destination' = 'source';
  pipelineId: string = '';
  connectionId: string = '';
  jobName: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private connectionService: ConnectionService,
    private jobService: JobService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pipelineId = params['id'];
      this.connectionId = params['connectionId'];
      this.jobName = decodeURI(params['jobName']);
    });

    this.route.data.subscribe(data => {
      this.selectType = data['selectType'];
    });

    this.connectionService.getAllConnections().subscribe(data => {
      this.connections = data
    });
  }

  configureJobFormGroup = new FormGroup({
    jobName: new FormControl('', Validators.required),
  });

  navigateToPreviousPage() {
    history.back();
  }

  cancelProcess() {
    this.router.navigateByUrl(`/pipeline/${this.pipelineId}/overview`);
  }

  // TODO: Implement adding new connection
  addNewConnection() {
    this.router.navigateByUrl('/connection/select-source');
  }

  continueToNextStep() {
    if (this.selectType === 'source') {
      const encodedJobName = encodeURIComponent(this.configureJobFormGroup.value.jobName as string);
      this.router.navigate(['../job-destination', this.selectedConnection, encodedJobName], { relativeTo: this.route });
    } else {
      this.jobService.createJob({
        name: this.jobName,
        pipelineId: this.pipelineId,
        sourceId: this.connectionId,
        destinationId: this.selectedConnection as string,
      }).subscribe(data => {
        this.router.navigateByUrl(`/pipeline/${this.pipelineId}/overview`);
      });
    }
  }

  selectConnection(id: string) {
    this.selectedConnection = id;
  }

  getTypeImage(typeName: string): string {
    return ConnectionTypeImageMapper.getImageRoute(typeName);
  }

  isSelected(id: string) {
    if (this.selectedConnection === id) {
      return 'selected';
    } else {
      return '';
    }
  }
}
