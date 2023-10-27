import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from '../_model/order-details-model';
import { Package } from '../_model/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private httpClient : HttpClient) { }

  public addPackage(pack : FormData){
    return this.httpClient.post<Package>("http://localhost:9090/addNewPackage", pack);
  }

  public getAllPackage(){
    return this.httpClient.get<Package[]>("http://localhost:9090/getAllPackage");
  }

  public deletePackage(packageId: any){
    return this.httpClient.delete("http://localhost:9090/deletePackageDetails/"+packageId );
  }

  public getPackageDetailsById(packageId: any){
    return this.httpClient.get<Package>("http://localhost:9090/getPackageDetailsById/"+packageId );
  }
  public getPackageDetails(isSinglePackageCheckout : any, packageId : any){
    return this.httpClient.get<Package[]>("http://localhost:9090/getPackageDetails/"+isSinglePackageCheckout+"/"+packageId);
  }
  public placeOrder(orderDetails : OrderDetails){
    return this.httpClient.post("http://localhost:9090/placeOrder", orderDetails);
  }

  public getAllOrderDetails(){
    return this.httpClient.get<OrderDetails[]>("http://localhost:9090/getAllOrderDetails");
  }
}
