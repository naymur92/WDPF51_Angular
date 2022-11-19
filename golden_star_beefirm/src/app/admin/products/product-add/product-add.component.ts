import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  status = {
    success: '',
    failed: '',
  };

  selectedProduct: Product = {};

  // Get id
  getId() {
    let link: any[] = this.router.url.split('/');
    let last_str = link[link.length - 1];
    let id;
    if (last_str != 'product-edit' && last_str != 'product-add') {
      return (id = last_str);
    }
  }

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    private dataService: ProductService
  ) {
    // call method to get product list
    this.dataService.readProduct(this.getId()).subscribe((product: Product) => {
      this.selectedProduct = product;
    });

    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Get file name
  filename = '';
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.filename = event.target.files[0].name;
      // console.log(event.target.files[0].name);
    }
  }

  postdata(angForm: any) {
    if (this.getId()) {
      // Edit Product start
      this.dataService
        .editProduct(
          this.getId(),
          angForm.value.name,
          angForm.value.price,
          angForm.value.category,
          angForm.value.stock,
          this.filename
        )
        .pipe(first())
        .subscribe(
          (data) => {
            // console.log(data);
            this.status = data;
          },
          (error) => {}
        ); // Edit Product End
      // console.log(angForm.value);
    } else {
      // Add Product start
      this.dataService
        .addProduct(
          angForm.value.name,
          angForm.value.price,
          angForm.value.category,
          angForm.value.stock,
          this.filename
        )
        .pipe(first())
        .subscribe(
          (data) => {
            // console.log(data);
            this.status = data;
          },
          (error) => {}
        ); // Add Product End
      // console.log(angForm.value);
    }
  }
}
