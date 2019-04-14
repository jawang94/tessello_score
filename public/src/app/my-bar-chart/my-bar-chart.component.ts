import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-my-bar-chart",
  templateUrl: "./my-bar-chart.component.html",
  styleUrls: ["./my-bar-chart.component.css"]
})
export class MyBarChartComponent implements OnInit {
  constructor() {}
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "Crime",
    "Income-Debt Ratio",
    "Assets and Liquidity",
    "Payment Timing",
    "Spending History Relative to Income",
    "Establishment",
    "Debt and Obligations",
    "Current Macroeconomic Client",
    "Social Media Presence",
    "Location",
    "Quality of Associations",
    "Consistency",
    "Gambling",
    "Organization",
    "Abnormal Purchase Activity"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    {
      data: [
        0.593,
        0.626,
        0.596,
        0.562,
        0.494,
        0.706,
        0.528,
        1.0,
        1.0,
        0.421,
        0.928,
        0.486,
        0.504,
        0.621,
        0.091
      ],
      label: "Where You Stand"
    }
  ];
  ngOnInit() {}
}
