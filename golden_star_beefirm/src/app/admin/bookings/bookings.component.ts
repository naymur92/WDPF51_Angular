import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Booking } from '../booking.model';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[] = [];

  getBookings() {
    this.bookingService.readBookings().subscribe((employees: Booking[]) => {
      this.bookings = employees;
    });
  }
  constructor(public router: Router, public bookingService: BookingService) {
    this.getBookings();
  }

  changeBookingStatus(id: any, status: any) {
    this.bookingService.changeBookingStatus(id, status).pipe(first())
    .subscribe(
      (data) => {
        // console.log(data);
        alert(data.success);
      },
      (error) => {}
    );
  }

  ngOnInit(): void {
  }

}
