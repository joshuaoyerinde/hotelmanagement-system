import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRoomsService } from '../services/book-rooms.service';

@Component({
  selector: 'app-complete-payment',
  templateUrl: './complete-payment.component.html',
  styleUrls: ['./complete-payment.component.css']
})
export class CompletePaymentComponent implements OnInit {

  constructor(
    public actroute: ActivatedRoute,
    public router: Router,
    public bookedserve: BookRoomsService
  ) { }
  public ref = this.actroute.snapshot.params.ref

  ngOnInit(): void {
    console.log(this.ref);
  }
  completeTrasnsaction(){
    let reference = this.ref;
    this.bookedserve.completePayService({ref:reference}).subscribe(resp=>{
      console.log(resp);
    })
  }

}
