import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: any;
  home: boolean;
  login: boolean;
  registration: boolean;
  score: boolean;

  constructor(private router: Router, private _httpService: HttpService) {}

  public showHome() {
    this.home = true;
    this.login = false;
    this.registration = false;
    this.score = false;
  }

  public showLogin() {
    this.home = false;
    this.login = true;
    this.registration = false;
    this.score = false;
  }

  public showRegistration() {
    this.home = false;
    this.login = false;
    this.registration = true;
    this.score = false;
  }

  public showScore() {
    this.home = false;
    this.login = false;
    this.registration = false;
    this.score = true;
  }

  public logoutUser() {
    let logoutObservable = this._httpService.logoutUser();
    logoutObservable.subscribe(data => {
      console.log("You have logged out");
      this.loggedIn();
      this.showHome();
    });
  }

  public loggedIn() {
    let userObservable = this._httpService.getLogin();
    userObservable.subscribe(data => {
      this.user = data;
      this.showScore();
    });
  }

  public isLoggedIn() {
    let loginObservable = this._httpService.getLogin();
    loginObservable.subscribe(data => {
      console.log(data, "is logged in");
      if (data === null) {
        this.user === null;
      } else {
        this.user = data[0];
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn();
  }
}
