import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeService: EmployeeService, public router: Router) {
    this.getEmployees();
  }
  employees: Employee[] = [];
  getEmployees(type?: any) {
    this.employeeService
      .readEmployees(type)
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }

  deleteEmployee(id: any) {
    this.employeeService.employeeDelete(id).subscribe((data: any) => {
      alert(data.success);
      this.getEmployees();
    });
  }

  ngOnInit(): void {}
}
