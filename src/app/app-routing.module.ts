import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ReportsComponent } from './reports/reports.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'page', component: PageComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'status', component: StatusComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
