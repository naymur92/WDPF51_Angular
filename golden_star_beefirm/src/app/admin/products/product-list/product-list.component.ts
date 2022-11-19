import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  getProducts() {
    this.productService.readProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  constructor(private productService: ProductService, public router: Router) {
    this.getProducts();
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((data: any) => {
      alert(data.success);
      this.getProducts();
    });
  }

  ngOnInit(): void {}
}
