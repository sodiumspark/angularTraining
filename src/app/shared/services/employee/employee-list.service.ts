import { Injectable } from '@angular/core';
import { Employee, employees, RestResponse } from './../../model/employee-model';
import { from, of, Observable, concat, pipe, BehaviorSubject } from 'rxjs';
import { flatMap, map } from "rxjs/operators"
import { HttpClient } from "@angular/common/http"
const baseUrl = 'http://localhost:4200/Thingworx/Things/'
import { v4 as uuidV4 } from "uuid"

const appKey = '5afd9f16-fe86-4db3-83a5-1b719e2c80ca'


interface EmpRestResponse{
  rows:Employee[]
}
export class EmployeeRest implements RestResponse {
  loading = false;
  error = false;
  fetched = false;
  data: Employee[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  employees: BehaviorSubject<EmployeeRest> = new BehaviorSubject(new EmployeeRest())
  constructor(private client: HttpClient) {
  }


  getAllEmployees(): BehaviorSubject<EmployeeRest> {
    console.log(this.employees.value)
    this.employees.next({
      ...this.employees.value,
      loading:true,
    })
    // this.client.post(`http://localhost:4200/Thingworx/Things/CMU_TH_NAVIGATION/Services/getEmployee`, {
    // }, {
    //     headers: {
    //       'appKey': appKey,
    //       'Content-Type': "application/json",
    //       'Accept': 'application/json'
    //     }
    //   }).subscribe(){
        
    //   }

    // this.client.post(`${baseUrl}CMU_TH_NAVIGATION/Services/getEmployee`, {
    // }, {
    //     headers: {
    //       'appKey': appKey,
    //       'Content-Type': "application/json",
    //       'Accept': 'application/json'
    //     }
    //   }).subscribe(r=>console.log(r))

    this.client.post(`http://localhost:4200/Thingworx/Things/CMU_TH_NAVIGATION/Services/getEmployee`, {
    }, {
        headers: {
          'appKey': appKey,
          'Content-Type': "application/json",
          'Accept': 'application/json'
        }
      }).subscribe((response:EmpRestResponse)=>{
        console.log(response.rows)

        this.employees.next({
          ...this.employees.value,
          loading:false,
          fetched:true,
          error:false,
          data:response.rows
        })

      })


    return this.employees
  }


  addEmployee(emp: Employee) {
    console.log("addEmployee called")
    this.client.post(`${baseUrl}CMU_TH_NAVIGATION/Services/setEmployee`, {}, {
      headers: {
        'appKey': appKey,
        'Content-Type': "application/json",
        'Accept': 'application/json'
      },
      params: {
        employeeRecord: JSON.stringify({ ...emp, id: uuidV4() })
      }
    }).subscribe(r => console.log(r))


    // concat(employees,of([emp]))
    // this.employees.pipe(concat(emp));
  }
}
