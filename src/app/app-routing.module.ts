import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from "./components/home-view/home-view.component";
import {LoginViewComponent} from "./components/login-view/login-view.component";

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'login', component: LoginViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
