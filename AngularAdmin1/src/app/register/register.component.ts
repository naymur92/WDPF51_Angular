import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  status = {
    success: '',
    failed: ''
  };
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(7), Validators.email],
      ],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {}

  postdata(angForm1: any) {
    this.dataService
      .userregistration(
        angForm1.value.name,
        angForm1.value.email,
        angForm1.value.password
      )
      .pipe(first())
      .subscribe(
        (data) => {
          // console.log(data);
          this.status = data;
        },

        (error) => {}
      );
  }

  get email() {
    return this.angForm.get('email');
  }
  get password() {
    return this.angForm.get('password');
  }
  get name() {
    return this.angForm.get('name');
  }
}
