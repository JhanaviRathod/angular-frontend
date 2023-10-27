import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../_model/order-details-model';
import { PackageService } from '../_services/package.service';

@Component({
  selector: 'app-show-order-confirmed',
  templateUrl: './show-order-confirmed.component.html',
  styleUrls: ['./show-order-confirmed.component.css']
})
export class ShowOrderConfirmedComponent implements OnInit {
  orderDetails : OrderDetails[] = [];
  displayedColumns: string[] = [' No.', 'Name','Address','Contact','Alternate','Amount','PackageId','PackageName'];
  constructor(private packageService : PackageService){}
  ngOnInit(): void {
    this.getAllOrderDetails();
  }
  public getAllOrderDetails(){
    this.packageService.getAllOrderDetails().subscribe(
      (resp : OrderDetails[]) =>{
        console.log(resp);
        this.orderDetails = resp;
      },(error : HttpErrorResponse) =>{
        console.log(error);
      }
    )
  }
}
