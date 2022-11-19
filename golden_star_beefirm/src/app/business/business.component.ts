import { Component, OnInit } from '@angular/core';
import { Product } from '../admin/product.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  products: Product[] = [];

  getHomeProducts() {
    this.productService.readProducts().subscribe((products: Product[]) => {
      this.products = products;
      // console.log(this.products);
    });
  }
  constructor(public productService: ApiService) {
    this.getHomeProducts();
  }

  ngOnInit(): void {
  }

}
