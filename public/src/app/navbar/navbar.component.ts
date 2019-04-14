import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() user: any;

  constructor(private _router: Router, private _httpService: HttpService) {}

  public logoutUser() {
    let logoutObservable = this._httpService.logoutUser();
    logoutObservable.subscribe(data => {
      console.log(data, "You have logged out");
      this._router.navigate(["/"]);
    });
  }

  ngOnInit() {}
}
