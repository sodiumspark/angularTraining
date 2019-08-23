import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Route } from '@angular/compiler/src/core';
import {Router} from '@angular/router/'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empData: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) { 
    this.empData = this.fb.group({
      namex: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      emailx: ['', Validators.email]
    })

    
    // console.log("Name recieved " + this.router.getCurrentNavigation().extras.state.name)
    // console.log("Email recieved " + this.empData.get('emailx'))
  }

  DatepickerOverviewExample() {
    
  }

  ngOnInit() {

  }

  formSubmit()
  {}
}



