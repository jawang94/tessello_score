import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  id: any;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let userObservable = this.httpService.getLogin();
    userObservable.subscribe(data => {
      console.log(data);
      this.id = data;
    });
  }
}
