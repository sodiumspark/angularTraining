import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/employee-model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-employee-list-element',
  templateUrl: './employee-list-element.component.html',
  styleUrls: ['./employee-list-element.component.css']
})


export class EmployeeListElementComponent implements OnInit {

  @Input('emp') empl:Employee

  constructor(private router:Router ) { }
  ngOnInit() {
  }

  goToEmployeeDetails(){
  console.log("You clicked on -> " + this.empl.name)
     this.router.navigateByUrl('/employee/' + this.empl.name)
    //   state:{
    //     name:this.empl.name
    //   }
    // })

  }

}
