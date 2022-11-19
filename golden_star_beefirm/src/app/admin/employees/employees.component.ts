import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // Check employee edit page
  editEmp() {
    let link = this.router.url;
    if(link.indexOf('employee-edit') != -1) return true;
    else return false;
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

}
