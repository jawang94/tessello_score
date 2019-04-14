import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ScoreComponent } from "./score/score.component";
import { UpdateComponent } from "./update/update.component";
import { HomeComponent } from "./home/home.component";
import { ChartsModule } from "ng2-charts";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "update",
    component: UpdateComponent
  },
  {
    path: "score",
    component: ScoreComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),
    ChartsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
