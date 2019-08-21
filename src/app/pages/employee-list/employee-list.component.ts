import { Component, OnInit } from '@angular/core';
import { Employee } from './../../shared/model/employee-model'
import { EmployeeListService } from "./../../shared/services/employee/employee-list.service"
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employxes: Employee[];
  // formInputName: FormControl;
  employeeProfileGroup: FormGroup;

  getEmployees() {
    this.employxes = this.employeeService.getAllEmployees()
  }
  constructor(private employeeService: EmployeeListService, private fb: FormBuilder) {
    //this.formInputName = new FormControl();
    this.employeeProfileGroup = this.fb.group({
      namex: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      emailx: ['', Validators.email]
    })

  }

  formSubmit() {
    if (this.employeeProfileGroup.valid) {
      this.employeeService.addEmployee({
        email: this.employeeProfileGroup.value.emailx,
        name: this.employeeProfileGroup.value.namex
      })
      this.getEmployees()   
    } 
  }
  ngOnInit() {
    this.getEmployees()
  }

}
