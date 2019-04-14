import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLogin: any;

  constructor(private httpService: HttpService) {}

  public onSubmit() {
    let userLoginObservable = this.httpService.loginUser(this.userLogin);
    userLoginObservable.subscribe(data => {
      console.log(data, " has logged in.");
    });
    this.userLogin = { username: "", password: "" };
  }

  ngOnInit() {
    this.userLogin = { username: "", password: "" };
  }
}
