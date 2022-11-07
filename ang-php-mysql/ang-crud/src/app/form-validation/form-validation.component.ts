import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent {
// Single form item
  // name = new FormControl('', Validators.minLength(5));
  // age = new FormControl('', Validators.required);
  // college = new FormControl('', Validators.maxLength(15));

  // onFormSubmit(): void {
  //   console.log(this.name.value);
  //   console.log(this.age.value);
  //   console.log(this.college.value);
  // }

// Grouping form items
  // myForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   age: new FormControl('')
  // });

  myForm: FormGroup;
  onFormSubmit2(): void {
    console.log(this.myForm.value);    
  }

  createForm() {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      age: new FormControl('')
    });
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}
}
