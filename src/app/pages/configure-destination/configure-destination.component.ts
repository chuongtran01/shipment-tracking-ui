import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-configure-destination',
  templateUrl: './configure-destination.component.html',
  styleUrls: ['./configure-destination.component.scss']
})
export class ConfigureDestinationComponent {

  protected readonly constants = constants;
  faArrowLeft = faArrowLeft;
  faXmark = faXmark;

  /**
   * Test data to see the page look
   * TODO: Change arrays with real data fetch from backend
   */
  products = [
    {
      id: 1,
      title: "Snowflake",
      img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631",
    },
    {
      id: 2,
      title: "BigQuery",
      img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_bigquery_logo_icon_168150.png",
    },
    {
      id: 3,
      title: "MySQL",
      img: "https://images.ctfassets.net/co0pvta7hzrh/20sNyoKJaAAWwG0k0qoGQg/1a4b5e6e4566c7cea6ebab887aeac060/image.png",
    },
    {
      id: 4,
      title: "Snowflake",
      img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631",
    },
    {
      id: 5,
      title: "Snowflake",
      img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631",
    },
    {
      id: 6,
      title: "Snowflake",
      img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631",
    },
    {
      id: 7,
      title: "BigQuery",
      img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_bigquery_logo_icon_168150.png",
    },
    {
      id: 8,
      title: "MySQL",
      img: "https://images.ctfassets.net/co0pvta7hzrh/20sNyoKJaAAWwG0k0qoGQg/1a4b5e6e4566c7cea6ebab887aeac060/image.png",
    },
    {
      id: 9,
      title: "Snowflake",
      img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631",
    },
    {
      id: 10,
      title: "Snowflake",
      img: "https://companieslogo.com/img/orig/SNOW-35164165.png?t=1634190631",
    },
  ];
  searchText: string = '';
  selectedProduct: number | null = null;

  constructor(
    private router: Router,
  ) {}

  navigateToPreviousPage() {
    this.router.navigateByUrl('/configure-source');
  }

  // TODO: Check which would be the dashboard route
  cancelProcess() {
    this.router.navigateByUrl('/');
  }

  // TODO: Implement adding new destination
  addNewDestination() {

  }

  continueToNextStep() {
    this.router.navigateByUrl('/final-settings');
  }

  handleSearchChange(searchText: string) {
    this.searchText = searchText;
  }

  selectProduct(id: number) {
    this.selectedProduct = id;
  }
}
