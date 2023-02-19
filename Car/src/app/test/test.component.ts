import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // String interpolation
  xyz = "This is heading from class file";

  // Property binding
  x = "hello";
  status = true;

  // Event binding
  greeting(name: string) {
    alert("Hello, " + name);
  }

  // Two way binding
  fname = '';


  // Directives
  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  p1 = 'myClass';

  price = 550;

  constructor() { }

  ngOnInit(): void {
  }

}
