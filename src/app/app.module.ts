import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PageComponent } from './page/page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { SparklineModule } from '@progress/kendo-angular-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReportsComponent } from './reports/reports.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { StatusComponent } from './status/status.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ReportsComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatTabsModule,
    MatSidenavModule,
    MatDividerModule,
    SparklineModule,
    MatTreeModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
	ChartsModule,
  HighchartsChartModule,
  MatProgressSpinnerModule,
  NgCircleProgressModule.forRoot({
    "units": "%",
    "outerStrokeLinecap": "butt"
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
