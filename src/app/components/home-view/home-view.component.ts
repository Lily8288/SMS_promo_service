import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SpsService} from "../../services/sps.service";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  constructor(private router: Router, private spsService: SpsService) {
  }

  changePage(): void {
    this.spsService.changePage('login')
  }
}
