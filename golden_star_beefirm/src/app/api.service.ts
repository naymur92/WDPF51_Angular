import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './admin/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl: string = '';
  baseUrl: string = 'https://goldenstar.bdprogrammers.com/api';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  public userlogin(username: any, password: any) {
    // alert(username);
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(
        map((Users) => {
          this.setToken(Users[0].name);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  } // Login End

  PHP_API_SERVER = 'https://goldenstar.bdprogrammers.com/api/products';

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

  BOOKING_API_SERVER = 'https://goldenstar.bdprogrammers.com/api/bookings';
  // Booking
  public addBooking(
    product_id: any,
    product_name: any,
    customer_name: any,
    customer_address: any,
    product_price: any,
    product_quantity: any,
    total_price: any,
    new_stock: any
  ) {
    return this.httpClient
      .post<any>(this.BOOKING_API_SERVER + '/add_booking.php', {
        product_id,
        product_name,
        customer_name,
        customer_address,
        product_price,
        product_quantity,
        total_price,
        new_stock,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  } // End Add Product

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
