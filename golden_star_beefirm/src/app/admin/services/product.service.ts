import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  PHP_API_SERVER = 'https://goldenstar.bdprogrammers.com/api/products';

  constructor(private httpClient: HttpClient) {}

  readProducts(category?: any): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${this.PHP_API_SERVER}/products.php/?cat=${category}`
    );
  }

  readProduct(id: any): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.PHP_API_SERVER}/getProduct.php/?id=${id}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  } // End Read Product

  public addProduct(
    name: any,
    price: any,
    category: any,
    stock: any,
    thumbnail: any
  ) {
    return this.httpClient
      .post<any>(this.PHP_API_SERVER + '/add_product.php', {
        name,
        price,
        category,
        stock,
        thumbnail,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  } // End Add Product

  public editProduct(
    id: number,
    name: any,
    price: any,
    category: any,
    stock: any,
    thumbnail: any
  ) {
    return this.httpClient
      .post<any>(this.PHP_API_SERVER + '/edit_product.php', {
        id,
        name,
        price,
        category,
        stock,
        thumbnail,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  } // End Edit Product

  deleteProduct(id: number) {
    return this.httpClient
      .delete<Product>(`${this.PHP_API_SERVER}/delete_product.php/?id=${id}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  } // Delete product end
}
