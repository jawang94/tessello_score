import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ScoreComponent } from "./score/score.component";
import { UpdateComponent } from "./update/update.component";
import { HomeComponent } from "./home/home.component";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { MyLineChartComponent } from "./my-line-chart/my-line-chart.component";
import { MyPieChartComponent } from "./my-pie-chart/my-pie-chart.component";
import { MetricWeightsComponent } from "./metric-weights/metric-weights.component";

const routes: Routes = [
  {
    path: "pie-chart",
    component: MyPieChartComponent
  },
  {
    path: "bar-chart",
    component: MyBarChartComponent
  },
  {
    path: "line-chart",
    component: MyLineChartComponent
  },
  {
    path: "metric-weights",
    component: MetricWeightsComponent
  },
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
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
