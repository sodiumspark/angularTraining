import { Component, OnInit } from '@angular/core';
import {EmployeeListService} from './../../services/employee/employee-list.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  employeeCount : number;

  constructor(private employeeService:EmployeeListService) {  
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response) => {
      console.log(response)
      this.employeeCount = response.data.length
    })
  }

}
