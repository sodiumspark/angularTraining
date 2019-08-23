import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empData: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.empData = this.fb.group({
      namex: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      emailx: ['', Validators.email]
    })
  }

  DatepickerOverviewExample() {
    
  }

  ngOnInit() {
  }

  formSubmit()
  {}
}



