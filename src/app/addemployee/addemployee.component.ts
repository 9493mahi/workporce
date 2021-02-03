import { Component, OnInit } from '@angular/core';
import { employee}from '../models/employee';
import {Router}from '@angular/router';
import {EmployeesService}from '../services/employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
emp:employee;
  constructor(private empservice:EmployeesService,private router:Router) { this.emp=new employee()}

  onSelect(event) {

    if (event.target.files && event.target.files[0]) {
      let rdr = new FileReader();
      rdr.readAsDataURL(event.target.files[0])
      rdr.onload = (ev: any) => {
        this.emp.Image = ev.target.result
      }
    }

    console.log(this.emp.image)
  }
  btnAdd(myfrm: any) {
    if (myfrm.valid) {
      this.emp.Image = this.emp.Image.replace('data:image/jpeg;base64,', '')
      this.emp.Image = this.emp.Image.replace('data:image/jpg;base64,', '')
      this.emp.Image = this.emp.Image.replace('data:image/png;base64,', '')
      this.emp.Image = this.emp.Image.replace('data:image/gif;base64,', '')

      alert(this.emp.Image)
      this.emp.Fname = myfrm.value.Fname;
      this.emp.Lname = myfrm.value.Lname;
      this.emp.Email = myfrm.value.Email;
      
  // alert(JSON.stringify(this.img))


      this.empservice.Addemp(this.emp).subscribe((data) => {
        console.log(data);
        alert(data.message)
         this.router.navigate([''])
      });
    }
  }
  ngOnInit() {
  }

}
