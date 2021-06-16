import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

import { Brand } from '../brand/brand';
import { Category } from '../category/category';
import { Product } from '../product/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 message ="You are not logged in";
 create: FormGroup;
 CatList :Category[] = []; 
 brandList : Brand[] = [];
 prodList : Product[] = [];
 brand : {} ; 
 product: {};
 constructor(private authService: AuthServiceService) { }

 ngOnInit(): void {
   this.authService.getCategory().subscribe( (data : Category[])=>{
     this.CatList =data
   });

   this.create = new FormGroup(
     {
       category :  new FormControl(''),
       brands : new FormControl(''),
       product: new FormControl('')
     }
   );
 }


 // getBrands(catId)
 // {
 //   this.authService.getBrandByCatId(catId).subscribe(
 //     (res:any)=> 
 //     {console.log(res);
 //       this.brand = res} 
 //   );

 // }

 onChangeCategory(catId : string)
 {
   this.authService.getBrandByCatId(catId).subscribe(data => this.brand= data);
 }


 onChangeBrand(brandId : string)
 {
   this.authService.getProductByBrandId(brandId).subscribe(data => this.product= data);
 }
}
