import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // Check employee edit page
  editProd() {
    let link = this.router.url;
    if (link.indexOf('product-edit') != -1) return true;
    else return false;
  }

  constructor(public router: Router) {}

  ngOnInit(): void {}
  @ViewChild(ProductListComponent) prodListComp: any;
}
