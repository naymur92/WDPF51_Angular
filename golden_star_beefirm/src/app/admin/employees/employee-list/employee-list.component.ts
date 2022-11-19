import { Component, OnInit, Output } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  // selectedEmployee: Employee = {};
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.readEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }

  ngOnInit(): void {}

  // editEmployee(id: any) {
  //   this.employees.forEach((element) => {
  //     if (element.id === id) {
  //       this.selectedEmployee = element;
  //     }
  //   });
  //   // console.log(this.selectedEmployee);
  // }
}

export class EditEmployee {
  
}
