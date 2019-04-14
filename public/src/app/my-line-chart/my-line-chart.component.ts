import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-my-line-chart",
  templateUrl: "./my-line-chart.component.html",
  styleUrls: ["./my-line-chart.component.css"]
})
export class MyLineChartComponent implements OnInit {
  constructor() {}
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019"
  ];
  public lineChartType = "line";
  public lineChartLegend = true;
  public lineChartData = [
    {
      data: [
        {
          x: 0,
          y: 1.57
        },
        {
          x: 10,
          y: 1.42
        },
        {
          x: 20,
          y: 1.33
        },
        {
          x: 30,
          y: 1.38
        },
        {
          x: 40,
          y: 1.25
        },
        {
          x: 50,
          y: 1.17
        },
        {
          x: 60,
          y: 1.13
        },
        {
          x: 70,
          y: 1.08
        },
        {
          x: 80,
          y: 1.05
        },
        {
          x: 90,
          y: 0.99
        },
        {
          x: 100,
          y: 0.94
        }
      ],
      label: "Social Media Presence"
    }
  ];
  ngOnInit() {}
}
