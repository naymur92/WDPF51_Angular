import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  constructor() {}

  // // Code from Book
  // person = {
  //   name: 'Naymur',
  //   address: 'Chuadanga',
  // };
  // submitted: boolean = false;
  // submitForm(form: NgForm) {
  //   this.submitted = true;
  //   if (form.valid) {
  //     console.log('Form submitted');
  //     this.submitted = false;
  //   }
  // }

  ngOnInit(): void {}
}
