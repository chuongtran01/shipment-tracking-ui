import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { constants } from 'src/app/utils/app.constants';

@Component({
  selector: 'app-source-selec tion',
  templateUrl: './source-selection.component.html',
  styleUrls: ['./source-selection.component.scss'],
})
export class SourceSelectionComponent {

  protected readonly constants = constants;

  /**
   * Test data to see the page look
   * TODO: Change arrays with real data fetch from backend
   */
  categories = [
    {
      id: 1,
      title: "Popular",
    },
    {
      id: 2,
      title: "Data bases",
    },
    {
      id: 3,
      title: "CRM",
    },
    {
      id: 4,
      title: "Marketing & Email",
    },
    {
      id: 5,
      title: "Ecommerce",
    },
    {
      id: 6,
      title: "Cloud Storage",
    },
    {
      id: 7,
      title: "Analytics",
    },
    {
      id: 8,
      title: "Data Warehouses",
    },
    {
      id: 9,
      title: "Marketing & Email",
    },
    {
      id: 10,
      title: "Ecommerce",
    },
    {
      id: 11,
      title: "Cloud Storage",
    },
    {
      id: 12,
      title: "Data Warehouses",
    },
    {
      id: 13,
      title: "Databases",
    },
    {
      id: 14,
      title: "Analytics",
    },
    {
      id: 15,
      title: "Data Warehouses",
    },
    {
      id: 16,
      title: "Marketing & Email",
    },
    {
      id: 17,
      title: "Ecommerce",
    },
    {
      id: 18,
      title: "Cloud Storage",
    },
    {
      id: 19,
      title: "Data Warehouses",
    },
    {
      id: 20,
      title: "Databases",
    },
  ];
  sources = [
    {
      id: 1,
      title: "Salesforce",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      type: "CRM",
    },
    {
      id: 2,
      title: "Microsoft SQL",
      img: "https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png",
      type: "DataBase",
    },
    {
      id: 3,
      title: "Mongo DB",
      img: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
      type: "Database",
    },
    {
      id: 4,
      title: "Amazon Web Services",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
      type: "DataBase",
    },
    {
      id: 5,
      title: "Oracle",
      img: "https://companieslogo.com/img/orig/ORCL-d5a587ae.png?t=1633210264",
      type: "DataBase",
    },
    {
      id: 6,
      title: "FireBase",
      img: "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
      type: "Database",
    },
    {
      id: 7,
      title: "Salesforce",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      type: "CRM",
    },
    {
      id: 8,
      title: "Microsoft SQL",
      img: "https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png",
      type: "DataBase",
    },
    {
      id: 9,
      title: "Mongo DB",
      img: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
      type: "Database",
    },
    {
      id: 10,
      title: "Amazon Web Services",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
      type: "DataBase",
    },
    {
      id: 11,
      title: "Oracle",
      img: "https://companieslogo.com/img/orig/ORCL-d5a587ae.png?t=1633210264",
      type: "DataBase",
    },
    {
      id: 12,
      title: "FireBase",
      img: "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
      type: "Database",
    },
  ];

  faXmark = faXmark;
  searchText: string = '';

  constructor(
    private router: Router,
  ) {}

  scrollCategory(categoryId: number) {
    const newUrl = `/select-source#${categoryId}`;
    this.router.navigateByUrl(newUrl);
  }

  // TODO: Handle search value and response
  handleSearchChange(searchText: string) {
    this.searchText = searchText;
  }

  // TODO: Handle cancel button click
  onCancelButton() {}

  productCardClicked() {
    this.router.navigateByUrl("/configure-source");
  }

}
