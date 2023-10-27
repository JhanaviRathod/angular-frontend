import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../_model/order-details-model';
import { PackageService } from '../_services/package.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit{

  
  constructor(){}
  ngOnInit(): void {
    
  }
  
}
