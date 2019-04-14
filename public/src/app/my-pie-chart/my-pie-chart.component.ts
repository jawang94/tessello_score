import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-my-pie-chart",
  templateUrl: "./my-pie-chart.component.html",
  styleUrls: ["./my-pie-chart.component.css"]
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = ["Your TesselloScore", "Remaining Attainable Points"];
  public pieChartData = [453, 347];
  public pieChartType = "pie";
  constructor() {}
  ngOnInit() {}
}
