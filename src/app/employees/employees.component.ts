import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: any[]=[];
  p: number =1;
  
 

  constructor(private empservice: EmployeesService, private router: Router) { }

  detailsClick(empid) {
    // alert("clicked")
    this.router.navigate(['empdetails/' + empid])
  }

  ngOnInit() {
    this.empservice.GetAllemp().subscribe((data) => {
      console.log(data)
      this.employee = data;

    })
  }

}
