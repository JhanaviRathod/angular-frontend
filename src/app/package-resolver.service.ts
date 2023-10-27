import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Package } from './_model/package.model';
import { PackageService } from './_services/package.service';

@Injectable({
  providedIn: 'root'
})
export class PackageResolverService implements Resolve<Package> {

  constructor(private packageService : PackageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Package>  {
    const id =route.paramMap.get("packageId");

    if(id){
      return this.packageService.getPackageDetailsById(id);

    }else{
      return of(this.getPackageDetails()); 
    }
    
  }
  getPackageDetails(){
    return{
      packageId : null,
      packageName : "",
      description : "",
      packageActualPrice : 0,
      packageDiscountedPrice : 0,
      packageImages : []
  
    };
  }
}
