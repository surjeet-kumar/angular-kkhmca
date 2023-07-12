import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  MasterData: any = [
    {
      id: 1,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 1,
    },
    {
      id: 2,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 2,
    },
    {
      id: 3,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 3,
    },
    {
      id: 4,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 4,
    },
    {
      id: 5,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 5,
    },
    {
      id: 6,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 6,
    },
    {
      id: 7,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 7,
    },
    {
      id: 8,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 8,
    },
    {
      id: 9,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 9,
    },
    {
      id: 10,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 10,
    },
    {
      id: 11,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 11,
    },
    {
      id: 12,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 12,
    },
    {
      id: 13,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 13,
    },
    {
      id: 14,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 14,
    },
    {
      id: 15,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 15,
    },
    {
      id: 16,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 16,
    },
    {
      id: 17,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 17,
    },
    {
      id: 18,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 18,
    },
    {
      id: 19,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 19,
    },
    {
      id: 20,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 20,
    },
    {
      id: 21,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 21,
    },
    {
      id: 22,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 22,
    },
    {
      id: 23,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 23,
    },
    {
      id: 24,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 24,
    },
    {
      id: 25,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 25,
    },
    {
      id: 26,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 26,
    },
    {
      id: 27,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 27,
    },
    {
      id: 28,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 28,
    },
    {
      id: 29,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 29,
    },
    {
      id: 30,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 30,
    },
    {
      id: 31,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 31,
    },
    {
      id: 32,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 32,
    },
    {
      id: 33,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 33,
    },
    {
      id: 34,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 34,
    },
    {
      id: 35,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 35,
    },
    {
      id: 36,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 36,
    },
    {
      id: 37,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 37,
    },
    {
      id: 38,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 38,
    },
    {
      id: 39,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 39,
    },
    {
      id: 40,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 40,
    },
    {
      id: 41,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 41,
    },
    {
      id: 42,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 42,
    },
    {
      id: 43,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 43,
    },
    {
      id: 44,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 44,
    },
    {
      id: 45,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 45,
    },
    {
      id: 46,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 46,
    },
    {
      id: 47,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 47,
    },
    {
      id: 48,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 48,
    },
    {
      id: 49,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 49,
    },
    {
      id: 50,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 50,
    },
    {
      id: 51,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 51,
    },
    {
      id: 52,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 52,
    },
    {
      id: 53,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 53,
    },
    {
      id: 54,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 54,
    },
    {
      id: 55,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 55,
    },
    {
      id: 56,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 56,
    },
    {
      id: 57,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 57,
    },
    {
      id: 58,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 58,
    },
    {
      id: 59,
      name: '',
      status: 0,
      sheet_type: 0,
      sheet_number: 58,
    },
    {
      id: 60,
      name: '',
      status: 0,
      sheet_type: 0,
      sheet_number: 61,
    },
    {
      id: 62,
      name: '',
      status: 0,
      sheet_type: 0,
      sheet_number: 62,
    },
    {
      id: 63,
      name: '',
      status: 0,
      sheet_type: 0,
      sheet_number: 63,
    },
    {
      id: 64,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 64,
    },
    {
      id: 65,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 65,
    },
    {
      id: 66,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 66,
    },
    {
      id: 67,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 67,
    },
    {
      id: 68,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 68,
    },
    {
      id: 69,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 69,
    },
    {
      id: 70,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 70,
    },
    {
      id: 71,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 71,
    },
    {
      id: 72,
      name: '',
      status: 0,
      sheet_type: 2,
      sheet_number: 72,
    },
    {
      id: 73,
      name: '',
      status: 0,
      sheet_type: 3,
      sheet_number: 73,
    },
    {
      id: 74,
      name: '',
      status: 0,
      sheet_type: 4,
      sheet_number: 74,
    },
    {
      id: 76,
      name: '',
      status: 0,
      sheet_type: 6,
      sheet_number: 76,
    },
    {
      id: 77,
      name: '',
      status: 0,
      sheet_type: 5,
      sheet_number: 77,
    },
    {
      id: 78,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 78,
    },
    {
      id: 79,
      name: '',
      status: 0,
      sheet_type: 1,
      sheet_number: 79,
    },
  ];
  masterdatasecond = this.MasterData

  constructor(private http: HttpClient) { }
  // get() {
  //   return this.http.get<Booking[]>('http://localhost:3000/booking');
  // }
  // bookingnow(payload: Booking) {
  //   console.log(payload,"bookingnow");
  //   return this.http.post<Booking>('http://localhost:3000/booking', payload);
  // }

  // bookinupdate(payload:Booking){
  //   console.log(payload,"bookingupdate");
  //   return this.http.put(`http://localhost:3000/booking/${payload.id}`,payload);
  //  }

  get() {
    // return this.http.get<Booking[]>('http://localhost:3000/booking');
    return this.masterdatasecond;
  }
  bookingnow(payload: Booking) {

    this.masterdatasecond=payload
    // return this.http.post<Booking>('http://localhost:3000/booking', payload);
  }

  bookinupdate(payload: Booking) {
    
    this.masterdatasecond.forEach((element:any) => {
      if (element.id == payload.id && element.status == 0) {         
         element.name = payload.name;
         element.status = 1         
      }
    });       
    return this.masterdatasecond;
    //this.masterdatasecond=payload
    // return this.http.put(
    //   `http://localhost:3000/booking/${payload.id}`,
    //   payload
    // );
  }
}
