import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class PricelistService {
  PHP_API_SERVER = 'http://localhost/wdpf51_Angular/Car/api';

  constructor(private httpClient: HttpClient) { }

  readProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>((`${this.PHP_API_SERVER}/index.php`));
  }
}
