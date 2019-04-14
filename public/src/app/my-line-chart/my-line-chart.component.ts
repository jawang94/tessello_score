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
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public lineChartType = "line";
  public lineChartLegend = true;
  public lineChartData = [
    {
      data: [
        {
          x: 10,
          y: 20
        },
        {
          x: 15,
          y: 30
        },
        {
          x: 20,
          y: 40
        },
        {
          x: 35,
          y: 50
        }
      ],
      label: "Series A"
    },
    {
      data: [
        {
          x: 15,
          y: 20
        },
        {
          x: 15,
          y: 35
        }
      ],
      label: "Series B"
    }
  ];
  ngOnInit() {}
}
