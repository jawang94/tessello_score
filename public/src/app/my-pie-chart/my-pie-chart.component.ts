import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-my-pie-chart",
  templateUrl: "./my-pie-chart.component.html",
  styleUrls: ["./my-pie-chart.component.css"]
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = [
    "Your Tessello Score",
    "Remaining Attainable Points"
  ];
  public pieChartData = [750, 100];
  public pieChartType = "pie";
  constructor() {}
  ngOnInit() {}
}
