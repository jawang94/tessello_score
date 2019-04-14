import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLogin: any;

  constructor(private httpService: HttpService, private router: Router) {}

  public onSubmit() {
    let userLoginObservable = this.httpService.loginUser(this.userLogin);
    userLoginObservable.subscribe(data => {
      console.log(data, " has logged in.");
      this.router.navigate(["/score/"]);
    });
    this.userLogin = { username: "", password: "" };
  }

  ngOnInit() {
    this.userLogin = { username: "", password: "" };
  }
}
