import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  Arr = Array;
  num:number = 3;
  num2:number = 7;

  selectedTab: string = "single layout";
  clicked(s: string) {
    this.selectedTab = "single layout"
    
     if (s == '2') {
      this.selectedTab = "split layout"
     }

     
  }
  constructor() { }

  ngOnInit(): void {
  }

}
