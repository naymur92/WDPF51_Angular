import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  // Check employee edit page
  editEmp() {
    let link = this.router.url;
    if (link.indexOf('employee-edit') != -1) return true;
    else return false;
  }

  constructor(public router: Router) {}

  @ViewChild(EmployeeListComponent) empListComp: any;

  ngOnInit(): void {}
}
