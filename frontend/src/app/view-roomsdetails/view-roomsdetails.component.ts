import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookRoomsService } from '../services/book-rooms.service';

@Component({
  selector: 'app-view-roomsdetails',
  templateUrl: './view-roomsdetails.component.html',
  styleUrls: ['./view-roomsdetails.component.css']
})
export class ViewRoomsdetailsComponent implements OnInit {
public arrayOfRooms;
public condition;
  constructor(
    public servicebooks: BookRoomsService
    ) { }

  ngOnInit(): void {
    this.getRoomsDetails();
  }
  getRoomsDetails(){
    this.servicebooks.fetchRooms().subscribe(
      data=>{
        console.log(data);
        this.arrayOfRooms = data;
        this.arrayOfRooms.forEach(
          element => {
            console.log(element.status == false ? 'available' :'occupied');
            if(element.status == false){ this.condition = 'Available';}
            else  { this.condition = 'Occupied';}
      });
    })
  }
  viewRoomDetails(a){
      console.log(a);
  }
  dropRoomDetails(value){
    console.log(value);
    this.servicebooks.dropRoom({id:value}).subscribe(d=>{
      console.log(d)
      this.getRoomsDetails();
    },(err:HttpErrorResponse)=>{
      console.log(err);
    })
  }
}
