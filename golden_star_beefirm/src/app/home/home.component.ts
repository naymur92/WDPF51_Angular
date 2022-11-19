import { Component, OnInit } from '@angular/core';
import { Product } from '../admin/product.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home_products: Product[] = [];

  getHomeProducts() {
    this.productService.readProducts().subscribe((products: Product[]) => {
      this.home_products = products.slice(0, 4);  // Get only 4 products
      // console.log(this.home_products);
    });
  }

  constructor(public productService: ApiService) {
    this.getHomeProducts();
  }

  ngOnInit(): void {
  }

}
