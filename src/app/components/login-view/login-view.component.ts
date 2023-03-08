import {Component} from '@angular/core';
import {SpsService} from "../../services/sps.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  constructor(private spsService: SpsService) {
  }

  changePage(): void {
   this.spsService.changePage('home');
  }
}
