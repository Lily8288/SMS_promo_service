import { Component } from '@angular/core';
import { SpsService } from "../../services/sps.service";


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private spsService: SpsService) {
    
  }

}
