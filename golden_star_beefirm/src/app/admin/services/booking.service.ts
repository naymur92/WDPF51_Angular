import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../product.model';
import { Booking } from '../booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  PHP_API_SERVER = 'https://goldenstar.bdprogrammers.com/api/bookings';

  constructor(private httpClient: HttpClient) {}

  readBookings(status?: string): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(
      `${this.PHP_API_SERVER}/bookings.php/?status=${status}`
    );
  }

  changeBookingStatus(id: any, status: any) {
    return this.httpClient.put<any>(
      `${this.PHP_API_SERVER}/change_booking_status.php`,
      { id, status }
    );
  }

  deleteBooking(id: any) {
    return this.httpClient
      .delete<Product>(`${this.PHP_API_SERVER}/delete_booking.php/?id=${id}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
