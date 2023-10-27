import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ImageProcessingService } from '../image-processing.service';
import { ShowPackageImagesDialogComponent } from '../show-package-images-dialog/show-package-images-dialog.component';
import { Package } from '../_model/package.model';
import { PackageService } from '../_services/package.service';

@Component({
  selector: 'app-show-package-details',
  templateUrl: './show-package-details.component.html',
  styleUrls: ['./show-package-details.component.css']
})
export class ShowPackageDetailsComponent implements OnInit {
 
  packageDetails : Package[] = [];
  displayedColumns: string[] = [' No.', 'Name', 'Description', 'Discount', 'Actual', 'Edit', 'Delete'];
  constructor(private packageService : PackageService, public imagesDialog: MatDialog, public imageProcessingService : ImageProcessingService, private router : Router){}
  ngOnInit(): void { 
    this.getAllPackage();  
  }
  
  public getAllPackage(){
    this.packageService.getAllPackage().subscribe(   
      (resp: Package[]) => {
        console.log(resp);
        this.packageDetails = resp;
        
      }, (error : HttpErrorResponse) =>{
        console.log(error);
      }
     );
  }

  deletePackage(packageId : number){
    this.packageService.deletePackage(packageId).subscribe(
      (resp : any)=>{
        this.getAllPackage();
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      } 
    );
  }

  showImages(pack : Package){
    console.log(pack);
    this.imagesDialog.open(ShowPackageImagesDialogComponent,{
      data: {
        images : pack.packageImages
      },
      height: '700px',
      width: '900px',
    });
  }

  editPackageDetails(packageId : number){
    this.router.navigate(['/addnewpackage', {packageId: packageId}]);
  }
}
