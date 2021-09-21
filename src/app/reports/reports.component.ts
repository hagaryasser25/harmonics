import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexLegend,
} from 'ng-apexcharts';



export type ChartOptions = {
  chart: ApexChart|any;
  annotations: ApexAnnotations|any;
  colors: string[]|any;
  dataLabels: ApexDataLabels|any;
  series: ApexAxisChartSeries|any;
  stroke: ApexStroke|any;
  labels: string[]|any;
  legend: ApexLegend|any;
  fill: ApexFill|any;
  tooltip: ApexTooltip|any;
  plotOptions: ApexPlotOptions|any;
  responsive: ApexResponsive[]|any;
  xaxis: ApexXAxis|any;
  yaxis: ApexYAxis|any;
  grid: ApexGrid|any;
  states: ApexStates|any;
  title: ApexTitleSubtitle|any;
  subtitle: ApexTitleSubtitle|any;
  theme: ApexTheme|any;
};


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  Arr = Array;
  num:number = 3;
  num2:number = 2;
  num3:number = 7;
  level=0;
  selectedTab = 'factory';

 

  clicked(s: string) {
    
     if (s == '1' && this.level ==1) {
      this.selectedTab = "function";
      console.log(this.level,this.selectedTab,s);

    }
    else if (s == '2'&& this.level ==2) {
      this.selectedTab = "load";
      console.log(this.level,this.selectedTab,s);

    }
    else if (s == '0'&& this.level ==0) {
      this.selectedTab = "factory";
      console.log(this.level,this.selectedTab,s);

    }
    
  }

  constructor() { 

    this.chartOptions = {
      series: [
        {
          name: "Load 01",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "Load 02",
          data: [20, 30, 50, 10, 60, 40, 69, 100, 120]
        }
      ],
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
 
        align: "left"
      },
      grid: {
        row: {
          colors: [, "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "21 Jan",
          "22 Jan",
          "23 Jan",
          "24 Jan",
          "25 Jan",
          "26 Jan",
          "27 Jan",
          "28 Jan",
          "29 Jan"
        ]
      }
    };

  }

  ngOnInit(): void {
  }

}
