import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
=======
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
>>>>>>> a5dbae8778e1a38c33fe2a7d509185c277736f54

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
<<<<<<< HEAD
export class FormValidationComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
=======
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
>>>>>>> a5dbae8778e1a38c33fe2a7d509185c277736f54

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
