import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { employee}from '../models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import {EmployeesService}from '../services/employees.service';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  employee:any;
  emp:employee;
  constructor(private empservice:EmployeesService,private arc:ActivatedRoute,private router:Router) {this.emp=new employee() }
  
  btnDel(email) {
    this.empservice.DeleteEmp(email).subscribe((data) => {
      console.log(data)
      alert('deleted succesfully')
      this.router.navigate([''])
    })
  }

  btnEditClick(empid:any){
    // console.log(empid)
this.router.navigate(['Edit/:'+empid])
  }
 
  ngOnInit() {
   let v=this.arc.snapshot.params.empid;
    this.empservice.getempDetails1(v).subscribe((data)=>{
      console.log(data)
      this.emp.empid=data[0].empid;
      this.emp.fname=data[0].fname;
      this.emp.lname=data[0].lname;
      this.emp.email=data[0].email;
      this.emp.image=data[0].image;
      
    })
    
  }

}
