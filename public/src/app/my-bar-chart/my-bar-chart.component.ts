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
        0.13,
        0.59,
        0.8,
        0.81,
        0.56,
        0.55,
        0.4,
        0.13,
        0.59,
        0.8,
        0.81,
        0.56,
        0.55,
        0.4,
        0.8
      ],
      label: "Where You Stand"
    },
    {
      data: [
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5
      ],
      label: "Global Average"
    }
  ];
  ngOnInit() {}
}
