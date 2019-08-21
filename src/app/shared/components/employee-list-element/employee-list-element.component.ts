import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/employee-model';

@Component({
  selector: 'app-employee-list-element',
  templateUrl: './employee-list-element.component.html',
  styleUrls: ['./employee-list-element.component.css']
})


export class EmployeeListElementComponent implements OnInit {

  @Input('emp') empl:Employee

  constructor() { }
  ngOnInit() {
  }

}
