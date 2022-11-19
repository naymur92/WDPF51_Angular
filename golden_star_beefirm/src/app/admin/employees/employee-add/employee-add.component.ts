import { Component, Input, OnInit } from '@angular/core';
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
import { EmployeeListComponent } from '../employee-list/employee-list.component';
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

  // Get id
  getId(){
    let link: any[] = this.router.url.split('/');
    let last_str = link[link.length - 1];
    let id;
    if(last_str != 'employee-edit' && last_str != 'employee-add'){
      return id = last_str;
    }
  }
  selectedEmployee: Employee | null = null;
  

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: EmployeeService,
    public router: Router,
    ) 
  {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.minLength(7), Validators.email],
      ],
      employee_type: [''],
      password: [''],
    });

    console.log(this.getId());

    // call method to get employee list
  }

  ngOnInit(): void {}

  postdata(angForm: any) {
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
