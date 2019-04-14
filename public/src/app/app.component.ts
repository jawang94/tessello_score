import { Component, OnInit } from "@angular/core";
import { HttpService } from "./services/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private _httpService: HttpService, private router: Router) {}

  public isLoggedIn() {
    let loginObservable = this._httpService.getLogin();
    loginObservable.subscribe(data => {
      console.log(data, "is logged in");
      if (data === null) {
        this.router.navigate(["/home"]);
      } else {
        this.user = data[0];
        this.router.navigate(["/score"]);
      }
    });
  }

  ngOnInit(): void {
    // this.isLoggedIn();
  }
}
