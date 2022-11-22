import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Booking } from '../booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(public router: Router, public bookingService: BookingService) {
    this.getBookings();
  }

  getBookings(status?: any) {
    this.bookingService
      .readBookings(status)
      .subscribe((bookings: Booking[]) => {
        this.bookings = bookings;
      });
  }

  changeBookingStatus(id: any, status: any) {
    this.bookingService
      .changeBookingStatus(id, status)
      .pipe(first())
      .subscribe(
        (data) => {
          // Call method to refresh data
          this.getBookings();

          alert(data.success);
        },
        (error) => {}
      );
  }

  deleteBooking(id: any) {
    this.bookingService.deleteBooking(id).subscribe((data: any) => {
      this.getBookings();
      // alert(data.success);
    });
  }

  ngOnInit(): void {}
}
