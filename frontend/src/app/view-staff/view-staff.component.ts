import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { SweetAlertCustomClass } from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { StaffService } from '../services/staff.service';
import { StaffsDialogComponent } from '../staffs-dialog/staffs-dialog.component';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
public arrayOfStaff;
public name="";
  constructor(public StaffService: StaffService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStaffDetails();
   
  }
  getStaffDetails(){
    this.StaffService.fetchStaffs().subscribe(
        data => {
        this.arrayOfStaff = data;
        console.log(this.arrayOfStaff);
    },
    (err:HttpErrorResponse)=>{
        console.log(err);
    });
  }
  //function to preview each details
  viewDetails(a){
    console.log(a);
    let previewStaffs = this.dialog.open(StaffsDialogComponent,{data:a});
    previewStaffs.afterClosed().subscribe(res =>{
      this.getStaffDetails();
      console.log(`Dialog boss:${res}`);
    })
  }
  removeDetails(value){
    console.log(value);
      this.StaffService.dimuteStaff({id:value}).subscribe(
        data=>{
          console.log(data);
          this.getStaffDetails();
        }
      )
  } 

}
