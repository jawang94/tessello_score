import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ScoreComponent } from "./score/score.component";
import { LoginComponent } from "./login/login.component";
import { HttpService } from "./services/http.service";
import { UpdateComponent } from "./update/update.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MetricWeightsComponent } from './metric-weights/metric-weights.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ScoreComponent,
    LoginComponent,
    UpdateComponent,
    NavbarComponent,
    HomeComponent,
    MyBarChartComponent,
    MyLineChartComponent,
    MyPieChartComponent,
    MetricWeightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
