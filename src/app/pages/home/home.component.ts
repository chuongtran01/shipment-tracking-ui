import { Component } from '@angular/core';
import { constants } from "../../utils/app.constants";

interface Benefit {
  id: number;
  header: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly constants = constants;

  getStarted () {}

}
