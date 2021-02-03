import { Component, OnInit } from '@angular/core';
import { employee}from '../models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import {EmployeesService}from '../services/employees.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp:employee;
  employee:any;
  img: Boolean = false;
  constructor(private empservice:EmployeesService,private arc:ActivatedRoute,private router:Router) {this.emp=new employee() }
  onFileSelect(event) {
    this.img = true
    if (event.target.files && event.target.files[0]) {
        let rdr = new FileReader();
        rdr.readAsDataURL(event.target.files[0])
        rdr.onload = (ev: any) => {
            this.emp.Image = ev.target.result
        }
    }

    console.log(this.emp.Image)
}
   Submitclick(){
    if (this.img == true) {
     
    this.emp.Image = this.emp.Image.replace('data:image/jpeg;base64,', '')
    this.emp.Image = this.emp.Image.replace('data:image/jpg;base64,', '')
    this.emp.Image = this.emp.Image.replace('data:image/png;base64,', '')
    this.emp.Image = this.emp.Image.replace('data:image/gif;base64,', '')

    alert(this.emp.Image)
  //  alert(" aswexd")
    this.empservice.UpdateEmp(this.emp).subscribe((data)=>{
     console.log(data);
    //  alert('Updated....')  
    })
    this.router.navigate([''])
    }
    
   }
  
  ngOnInit() {
    let v=this.arc.snapshot.params.empid;
    this.empservice.getempDetails(v).subscribe((data)=>{
      console.log(data)
      this.emp.fname=data[0].fname;
      this.emp.lname=data[0].lname;
      this.emp.email=data[0].email;
      this.emp.image=data[0].image;
      
    })
     
  }

}
