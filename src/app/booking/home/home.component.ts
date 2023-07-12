import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBooking: Booking[] = [];
  sheetType ={
    '0': 'left Lower sheet',
    '1': 'left Middle sheet',
    '2': 'left Upper sheet',
    '3': 'Right Lower sheet',
    '4': 'Right Middle sheet',
    '5': 'Right Upper sheet',
    '6': 'Midle'
  }
  bookedsheet=0;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.get();
    
  }

  get() {
    // this.bookingService.get().subscribe((data) => {
    //   this.allBooking = data;
    //   this.allBooking.forEach(element => {
    //     if(element.status==1){
    //       this.bookedsheet++
    //     }
    //   });
    // });
    this.allBooking = this.bookingService.get();
    // console.log(this.allBooking);
    this.allBooking.forEach((element) => {
      if (element.status == 1) {
        this.bookedsheet++;
      }
    });
  }

}
