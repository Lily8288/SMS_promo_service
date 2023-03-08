import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SpsService {

  constructor(private router: Router) { }

  changePage(destination: string): void {
    this.router.navigate([`/${destination}`])
  }
}
