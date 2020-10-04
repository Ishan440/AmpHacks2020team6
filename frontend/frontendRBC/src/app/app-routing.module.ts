import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmployeeOpportunitiesComponent} from './employee-opportunities/employee-opportunities.component';
import {CustomerAdvisorsComponent} from './customer-advisors/customer-advisors.component';
import {EmployeeProfileComponent} from './employee-profile/employee-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'employee/home', component: EmployeeOpportunitiesComponent, pathMatch: 'full' },
  { path: 'customer/home', component: CustomerAdvisorsComponent, pathMatch: 'full' },
  { path: 'customer/employee-profile/:id', component: EmployeeProfileComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
