import { Injectable } from '@angular/core';
import{employee}from '../models/employee';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{Observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url: string = "http://localhost:4500/employee"
  
  constructor(private htc:HttpClient) { }

  Addemp(emp: employee): Observable<any> {
    console.log(JSON.stringify(emp));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url , JSON.stringify(emp), httpOptions)
  }

  GetAllemp(): Observable<any> {
    return this.htc.get(this.url, { responseType: 'json' })
  }
  
  getempDetails(empid: any): Observable<any> {
    return this.htc.get(this.url +'/'+ empid, { responseType: 'json' })
  }
  getempDetails1(empid: any): Observable<any> {
    return this.htc.get(this.url +'/'+ empid, { responseType: 'json' })
  }
  
  DeleteEmp(empid: any): Observable<any> {
    return this.htc.delete(this.url + '/' + empid, { responseType: 'json' })
  }
 
  UpdateEmp(a:employee):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({'content-type':'application/json'})
    }
    //console.log(a)
    return this.htc.put(this.url+'/'+a.empid,JSON.stringify(a),httpOptions)
  }
}
