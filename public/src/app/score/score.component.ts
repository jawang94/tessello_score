import { Component, OnInit } from "@angular/core";
import { HttpService } from "../services/http.service";
import { ChartsModule } from "ng2-charts";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  id: any;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    let userObservable = this.httpService.getLogin();
    userObservable.subscribe(data => {
      console.log(data);
      this.id = data;
    });
  }
}
