import { Injectable } from '@angular/core';
import {Employee,employees} from './../../model/employee-model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  employees:Employee[] =employees
  constructor() {
   }
   getAllEmployees(){
     return this.employees
   }
   addEmployee(emp:Employee){
     this.employees = [emp,...this.employees]
   }
}
