import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() user: any;
  @Output() login = new EventEmitter();
  @Output() registration = new EventEmitter();

  constructor(private _router: Router, private _httpService: HttpService) {}

  public logoutUser() {
    let logoutObservable = this._httpService.logoutUser();
    logoutObservable.subscribe(data => {
      console.log("You have logged out");
    });
  }

  public loginClick() {
    this.login.emit();
  }

  public registrationClick() {
    this.registration.emit();
  }

  ngOnInit() {}
}
