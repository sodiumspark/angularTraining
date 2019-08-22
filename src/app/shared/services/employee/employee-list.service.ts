import { Injectable } from '@angular/core';
import { Employee, employees } from './../../model/employee-model';
import { from, of, Observable, concat, pipe } from 'rxjs';
import { flatMap, map } from "rxjs/operators"
import { HttpClient } from "@angular/common/http"
const baseUrl = 'http://localhost:4200/Thingworx/Things/'
import { v4 as uuidV4 } from "uuid"

const appKey = '5afd9f16-fe86-4db3-83a5-1b719e2c80ca'
@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  employees: Observable<Employee[]> = of([])
  constructor(private client: HttpClient) {
  }
  getAllEmployees(): Observable<Employee[]> {

    // this.client.post(`${baseUrl}CMU_TH_NAVIGATION/Services/getEmployee`, {
    // }, {
    //     headers: {
    //       'appKey': appKey,
    //       'Content-Type': "application/json",
    //       'Accept': 'application/json'
    //     }
    //   }).subscribe(r=>console.log(r))

    return this.client.post(`http://localhost:4200/Thingworx/Things/CMU_TH_NAVIGATION/Services/getEmployee`, {
    }, {
        headers: {
          'appKey': appKey,
          'Content-Type': "application/json",
          'Accept': 'application/json'
        }
      }).pipe(map((r: any) => r.rows))
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
