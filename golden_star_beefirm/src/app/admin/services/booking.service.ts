import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../product.model';
import { Booking } from '../booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  PHP_API_SERVER =
  'http://localhost/wdpf51_Angular/golden_star_beefirm/api/bookings';

constructor(private httpClient: HttpClient) {}

readBookings(): Observable<Booking[]> {
  return this.httpClient.get<Booking[]>(
    `${this.PHP_API_SERVER}/bookings.php`
  );
}
}
