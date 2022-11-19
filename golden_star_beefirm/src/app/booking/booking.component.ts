import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../admin/product.model';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selectedProduct: Product = {};

  // Get id from link
  getId() {
    let link: any[] = this.router.url.split('/');
    let last_str = link[link.length - 1];
    let id;
    if (last_str != 'booking') {
      return (id = last_str);
    }
  }
 
  angForm: FormGroup;
  constructor(public router: Router, public productService: ApiService, private fb: FormBuilder,) {
    this.productService.readProduct(this.getId()).subscribe((product: Product) => {
      this.selectedProduct = product;
    });


    this.angForm = this.fb.group({
      customer_name: ['', Validators.required],
      address: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  calcTotalPrice(price: any, quantity: any) {
    // console.log(price, quantity);
    this.total_price = (parseInt(price) * parseInt(quantity));
    return (parseInt(price) * parseInt(quantity));
  }

  ngOnInit(): void {
  }

  product_name = '';
  price = '';
  total_price: any ='';
  stock: any = '';

  getStock(){
    return (this.stock - this.angForm.value.quantity);
  }
  sentData(p_name: any, price: any, stock: any){
    this.product_name = p_name;
    this.price = price;
    this.stock = stock;
  }
  postdata(angForm: any) {
    // Add Product start
    this.productService
    .addBooking(
      this.getId(),
      this.product_name,
      angForm.value.customer_name,
      angForm.value.address,
      this.price,
      angForm.value.quantity,
      this.total_price,
      this.getStock()
      
    )
    .pipe(first())
    .subscribe(
      (data) => {
        alert(data.success);
        this.router.navigate(['/business']);
        // console.log(data);
      },
      (error) => {}
    ); // Add Product End
  }

}
