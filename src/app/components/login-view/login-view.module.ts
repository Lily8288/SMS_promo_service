import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    LoginViewComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule
    ]
})
export class LoginViewModule { }
