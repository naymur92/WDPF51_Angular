import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent implements OnInit {
  // mandoForm = new FormGroup({
  //   name: new FormControl(),
  //   series: new FormControl('The Mandalorian'),
  // });
  // onFormSubmit(): void {
  //   console.log('Name:' + this.mandoForm.get('name').value);
  //   console.log('Series:' + this.mandoForm.get('series').value);
  // }


  constructor() {}

  ngOnInit(): void {}
}
