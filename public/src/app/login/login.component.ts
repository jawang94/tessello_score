import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpService } from "../services/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLogin: any;
  @Output() loginEmit = new EventEmitter();

  constructor(private httpService: HttpService, private router: Router) {}

  callParent() {
    console.log("fired");
    this.loginEmit.emit();
  }

  public onSubmit() {
    let userLoginObservable = this.httpService.loginUser(this.userLogin);
    userLoginObservable.subscribe(data => {
      console.log(data, " has logged in.");
      this.callParent();
    });
    this.userLogin = { username: "", password: "" };
  }

  ngOnInit() {
    this.userLogin = { username: "", password: "" };
  }
}
