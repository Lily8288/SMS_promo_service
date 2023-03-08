import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HomeViewComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule
    ]
})
export class HomeViewModule { }
