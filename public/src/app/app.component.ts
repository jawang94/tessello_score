import { Component, OnInit } from "@angular/core";
import { HttpService } from "./services/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private httpService: HttpService) {}

  public isLoggedIn() {
    let loginObservable = this.httpService.getLogin();
    loginObservable.subscribe(data => {
      console.log(data, "is logged in");
      if (data) {
        this.user = data[0];
      }
    });
  }

  ngOnInit(): void {
    this.isLoggedIn();
  }
}
