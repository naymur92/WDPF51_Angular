import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  status = {
    success: '',
    failed: '',
    dupemail: '',
  };

  selectedEmployee: Employee = {};

  // Get id
  getId() {
    let link: any[] = this.router.url.split('/');
    let last_str = link[link.length - 1];
    let id;
    if (last_str != 'employee-edit' && last_str != 'employee-add') {
      return (id = last_str);
    }
  }

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: EmployeeService,
    public router: Router
  ) {
    // call method to get employee list
    this.dataService
      .readEmployee(this.getId())
      .subscribe((employee: Employee) => {
        this.selectedEmployee = employee;
      });

    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.minLength(7), Validators.email],
      ],
      employee_type: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  postdata(angForm: any) {
    if (this.getId()) {
      this.dataService
        .employeeUpdate(
          this.getId(),
          angForm.value.name,
          angForm.value.email,
          angForm.value.employee_type,
          angForm.value.password
        )
        .pipe(first())
        .subscribe(
          (data) => {
            // console.log(data);
            this.status = data;
          },
          (error) => {}
        );
      // console.log(angForm.value);
    } else {
      this.dataService
        .employeeRegistration(
          angForm.value.name,
          angForm.value.email,
          angForm.value.employee_type,
          angForm.value.password
        )
        .pipe(first())
        .subscribe(
          (data) => {
            console.log(data);
            this.status = data;
          },
          (error) => {}
        );
      // console.log(angForm.value);
    }
  }
}
