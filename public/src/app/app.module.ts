import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ScoreComponent } from "./score/score.component";
import { LoginComponent } from "./login/login.component";
import { HttpService } from "./services/http.service";
import { UpdateComponent } from "./update/update.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ScoreComponent,
    LoginComponent,
    UpdateComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
