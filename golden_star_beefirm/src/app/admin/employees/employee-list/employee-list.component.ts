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
  employees: Employee[] = [];

  getEmployees() {
    this.employeeService.readEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }

  constructor(private employeeService: EmployeeService, public router: Router) {
    this.getEmployees();
  }

  deleteEmployee(id: any) {
    this.employeeService.employeeDelete(id).subscribe((data: any) => {
      alert(data.success);
      this.getEmployees();
    });
  }

  ngOnInit(): void {}
}
