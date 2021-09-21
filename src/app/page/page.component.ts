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
 @ViewChild("chart4")
 chart4!: ChartComponent;
 @ViewChild("chart5")
 chart5!: ChartComponent;
 @ViewChild("chart6")
 chart6!: ChartComponent;
 @ViewChild("chart7")
 chart7!: ChartComponent;
 @ViewChild("chart8")
 chart8!: ChartComponent;
 @ViewChild("chart9")
 chart9!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2!: Partial<ChartOptions>;
  public chartOptions3!: Partial<ChartOptions>;
  public chartOptions4!: Partial<ChartOptions>;
  public chartOptions5!: Partial<ChartOptions>;
  public chartOptions6!: Partial<ChartOptions>;
  public chartOptions7!: Partial<ChartOptions>;
  public chartOptions8!: Partial<ChartOptions>;
  public chartOptions9!: Partial<ChartOptions>;



  selectedTab: string = "energy consumption";
  value!: number;
  clicked(s: string) {
    this.selectedTab = "energy consumption"
    
     if (s == '2') {
      this.selectedTab = "active power"

    }
    else if (s == '3') {
      this.selectedTab = "power factor"

    }
    else if (s == '4') {
      this.selectedTab = "harmonics"

    }
    else if (s == '5') {
      this.selectedTab = 'sagswell'
    }
  }

  selectedTab2: string = "bar chart";
  clicked2(s2: string) {
    this.selectedTab2 = "bar chart"
    
     if (s2 == '2') {
      this.selectedTab2 = "record list"
     }

     if (s2 == '3') {
      this.selectedTab2 = "line chart"

     }
  }

  

  public options: any = {
    chart: {
       type: 'area'
    },
    accessibility: {
        description: '',
    },
    title: {
       text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
        text: 'Sources: Dummy data'
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billions'
        },
        labels: {
            formatter:  (value : any)  =>{
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [105, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [153, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [16, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 50]
    }]
  }


  public data!: any[];
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

    this.chartOptions4 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        
        
      ],
      chart: {
        height: 150,
        type: "area",
        
      },
     


      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };

    this.chartOptions5 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        
        
      ],
      chart: {
        height: 120,
        type: "area",
        
      },
     


      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };

    this.chartOptions6 = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }
      ],
      chart: {
        
        height: 300,
       
        type: "bar",
        events: {
          click: function(chart: any, w: any, e: any) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#00CCF2",
        "#00D3BE",
        "#6DCF67",
        "#A0C73A",
        "#D0BA05",
        "#FFA600",
        "#FB7644",
        "#CA4E82"
      ],
      plotOptions: {
        bar: {
          columnWidth: "30%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          "Load 01",
          "Load 02",
          "Load 01",
          "Load 02",
          "Load 01",
          "Load 02",
          "Load 01",
          "Load 02",

        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };

    this.chartOptions7= {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Load Name", "Load Name", "Load Name", "Load Name", "Load Name"],
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

    this.chartOptions8 = {
      series: [
        {
          name: "THDi",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "THDv",
          data: [13, 23, 20, 8, 13, 27]
        },
        
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "feature 01",
          "feature 02",
          "feature 01",
          "feature 02",
          "feature 01",
          "feature 02",
          
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };

    this.chartOptions9 = {
      series: [
        {
          name: "Feature 03",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "",
          data: [12, 50, 20, 51, 49, 70, 50, 91, 120]
        },
        {
          name: "",
          data: [50, 20, 10, 10, 80, 62, 69, 150, 70]
        }
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
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "20 Jan",
          "21 Jan",
          "22 Jan",
          "23 Jan",
          "24 Jan",
          "25 Jan",
          "26 Jan",
          "27 Jan",
          "28 Jan"
        ]
      }
    };
    
}
public generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}


    
  }


  
  


