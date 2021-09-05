import { Component, ViewChild } from '@angular/core';
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
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent  {

  

  

 @ViewChild("chart")
  chart!: ChartComponent;
  
 @ViewChild("chart2")
 chart2!: ChartComponent;

 @ViewChild("chart3")
 chart3!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2!: Partial<ChartOptions>;
  public chartOptions3!: Partial<ChartOptions>;



  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "THDi",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "THDv",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          
        }
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feature 01",
          "Feature 02",
          "Feature 01",
          "Feature 02",
          "Feature 01",
          "Feature 02",
          "Feature 01",
          "Feature 02",
          "Feature 01"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
    this.chartOptions2  = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Harmonic 01", "Harmonic 03", "Harmonic 05", "Harmonic 09", "Harmonic 11"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptions3 = {
      series: [
        {
          name: "Hrmonic11",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "",
          data: [50, 41, 35, 17, 49, 55, 69, 100, 148]
        },
        {
          name: "",
          data: [50, 39, 17, 17, 80, 55, 50, 100, 148]
        },
      ],
      chart: {
        height: 350,
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
          colors: [ "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "20Jan",
          "21Jan",
          "22Jan",
          "23Jan",
          "24Jan",
          "25Jan",
          "26Jan",
          "27Jan",
          "28Jan"
        ]
      }
    };
  }
}
  
  


