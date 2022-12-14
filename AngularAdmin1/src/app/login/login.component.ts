import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: boolean = true;
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}
  postdata(angForm1: any) {
    this.dataService
      .userlogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        (data) => {
          const redirect = this.dataService.redirectUrl
            ? this.dataService.redirectUrl
            : '/dashboard';
          this.router.navigate([redirect]);
          this.login = true;
          // console.log(data);
        },
        (error) => {
          this.login = false;
          // alert('User name or password is incorrect');
        }
      );
      // console.log(angForm1.value);
  }
  get email() {
    return this.angForm.get('email');
  }
  get password() {
    return this.angForm.get('password');
  }
}
