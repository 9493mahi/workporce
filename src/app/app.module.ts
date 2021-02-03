import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import {EmployeesService}from './services/employees.service';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EditComponent } from './edit/edit.component';


const routes:Routes=[
  {path:'addemployee',component:AddemployeeComponent},
  {path:'',component:EmployeesComponent},
  {path:'empdetails/:empid',component:EmpdetailsComponent},
  {path:'Edit/:empid',component:EditComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeesComponent,
    EmpdetailsComponent,
    EditComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule,NgxPaginationModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
