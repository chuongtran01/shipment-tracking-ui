import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline-dashboard-navbar',
  templateUrl: './pipeline-dashboard-navbar.component.html',
  styleUrls: ['./pipeline-dashboard-navbar.component.scss'],
})
export class PipelineDashboardNavbarComponent implements OnInit {
  activityIcon = '../../../assets/images/activity.svg';
  schemaMapperIcon = '../../../assets/images/schematics.svg';
  overviewIcon = '../../../assets/images/Icon-material-dashboard.svg';
  transformationIcon = '../../../assets/images/Icon-material-transform.svg';
  loadStatusIcon = '../../../assets/images/layers.svg';

  selectedOption: string = '';
  userId: string = '';

  options = [
    {
      id: '1',
      title: 'Overview',
      navigate: 'overview',
      icon: this.overviewIcon,
    },
    {
      id: '2',
      title: 'Transformations',
      navigate: 'transformations',
      icon: this.transformationIcon,
    },
    {
      id: '3',
      title: 'Schema Mapper',
      navigate: 'schema-mapper',
      icon: this.schemaMapperIcon,
    },
    {
      id: '4',
      title: 'Load Status',
      navigate: 'load-status',
      icon: this.loadStatusIcon,
    },
    {
      id: '5',
      title: 'Activity',
      navigate: 'activity',
      icon: this.activityIcon,
    },
  ];

  ngOnInit() {
    const url = window.location.href;
    const paths = url.split('/');
    this.userId = paths[4];
    this.selectedOption = paths.pop() ?? '';
  }
}
