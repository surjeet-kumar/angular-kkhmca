import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bookingForm: Booking = {
    id: 0,
    name: '',
    status: 0,
    sheet_type: 0,
    sheet_number: 0,
  };
  allBooking: Booking[] = [];
  numberOfsheet:any

  constructor(private bookingService:BookingService,
    private router:Router) { }

  ngOnInit(): void {
    this.get();
  }

  bookingnow(){    
    var bebooksheet = [];
    var row = 7;
    var rowcheck = 1;
    var sheetflaglength = this.allBooking.length/row;
    var sheet_number_from = 0;

    if(this.numberOfsheet==6){ 
      var numbersheetcheck = 7-this.numberOfsheet     
      for(let i=1;i<=sheetflaglength;i++){
          if(i> 1){
            rowcheck=row*(i-1);
          }
          var ncheck = 1;
          var ncheckflag = 0
          for(let j=rowcheck; j <= row*i ; j++){
            if(ncheck > numbersheetcheck || ncheckflag==numbersheetcheck){
              break;
            }
            if(this.allBooking[j].status==0){              
              sheet_number_from=this.allBooking[j].sheet_number;
            }
            ncheck++;
            ncheckflag++            
          }
          if(sheet_number_from){
             break;
          }
      } 
    }
    if(this.numberOfsheet==2){          
      for(let i=1;i<=sheetflaglength;i++){
          if(i> 1){
            rowcheck=row*(i-1);
          }
          var ncheck = 1;
          var ncheckflag = 0
          for(let j=rowcheck; j <= row*i ; j++){
            
            if(this.allBooking[j].status==0){ 
              ncheckflag++            
              
            }else{
              continue;
            }  
            if(ncheckflag==this.numberOfsheet){
              sheet_number_from=this.allBooking[j].sheet_number-(this.numberOfsheet-1) 
              break;
            } 
          }
          
          if(sheet_number_from){            
            break;
          }
      }
    }
    if(this.numberOfsheet==4){ 
      for(let i=1;i<=sheetflaglength;i++){
          if(i> 1){
            rowcheck=row*(i-1);
          }
          var ncheck = 1;
          var ncheckflag = 0
          for(let j=rowcheck; j <= row*i ; j++){
            
            if(this.allBooking[j].status==0){ 
              ncheckflag++   
            }else{
              continue;
            }  
            if(ncheckflag==this.numberOfsheet){
              sheet_number_from=this.allBooking[j].sheet_number-(this.numberOfsheet-1) 
              break;
            } 
          }
          
          if(sheet_number_from){            
            break;
          }
      }
    }

    // console.log(this.numberOfsheet);
    // console.log(this.allBooking)
    if(this.numberOfsheet==1){ 
      for(let i=1;i<=sheetflaglength;i++){
          if(i> 0){
            rowcheck=row*(i-1);
          }
          // console.log(rowcheck)
          var ncheck = 1;
          var ncheckflag = 0
          for(let j=rowcheck; j <= row*i ; j++){
            
            if(this.allBooking[j].status==0){ 
              ncheckflag++  
            }else{
              continue;
            }  
            if(ncheckflag==this.numberOfsheet){
              sheet_number_from=this.allBooking[j].sheet_number-(this.numberOfsheet-1) 
              break;
            } 
          }
          
          if(sheet_number_from){            
            break;
          }
      }
    }
    if(sheet_number_from !=0){
      for(let i=0; i < this.numberOfsheet; i++){ 
        this.bookingForm.status=1;
        this.bookingForm.sheet_type=i+1;
        this.bookingForm.id=sheet_number_from;
        this.bookingForm.sheet_number=sheet_number_from
        sheet_number_from++;
        this.bookingService.bookinupdate(this.bookingForm)
        // .subscribe({        
        //   error:(err) => {
        //     console.log(err);
        //   }
        // })        
      }
    }
    // when some sheet left in all row then call this case 
    if(sheet_number_from==0){
      var bookflagleft = 1      
      for(let j=0; j < this.allBooking.length ; j++){            
        if(this.allBooking[j].status==0){
          bookflagleft++              
          this.bookingForm.status=1;              
          this.bookingForm.id=this.allBooking[j].id;
          this.bookingForm.sheet_number=this.allBooking[j].sheet_number              
          this.bookingService.bookinupdate(this.bookingForm)
          // .subscribe({        
          //   error:(err) => {
          //     console.log(err);
          //   }
          // }) 
        }
        if(bookflagleft==this.numberOfsheet){
            break;
        }
      }      
    }
    this.router.navigate(["/booking/home"])
    
  }

  get() {
    // this.bookingService.get().subscribe((data) => {
    //   this.allBooking = data;
    // });
    this.allBooking = this.bookingService.get();
  }

}
