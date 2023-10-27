import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../_model/package.model';

@Component({
  selector: 'app-package-view-details',
  templateUrl: './package-view-details.component.html',
  styleUrls: ['./package-view-details.component.css']
})
export class PackageViewDetailsComponent implements OnInit{
  pack!: Package; 
  constructor(private acivatedRoute : ActivatedRoute, private router : Router){}
  ngOnInit(): void {
    this.pack = this.acivatedRoute.snapshot.data['pack'];
    console.log(this.pack);
  }
  
  buyPackage(packageId : number){
    this.router.navigate(['/buyPackage',{
      isSinglePackageCheckout: true, id: packageId
    }]);
  }
}
