import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../admin/city/city';
import { Country } from '../admin/country/country';
import { AuthServiceService } from '../auth-service.service';
import { buy } from './buy';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

  buyList : buy[]=[];
  cityList: City[] = [];
  countryList : Country[] = [];
  buyForm : FormGroup;
  city : {} ; 
  productId : any;
    productPrice : any;

  constructor(private authService: AuthServiceService, private route : ActivatedRoute)

  { 
  this.productId = parseInt(this.route.snapshot.paramMap.get('productId'));

    this.authService.getProductById(this.productId).subscribe(r=>{this.productPrice = r.productPrice;
      console.log(r); 
    });
 }





 ngOnInit(): void {
 

  this.authService.getCountry().subscribe( (data : Country[])=>{
    this.countryList =data      
  });
console.log(this.productId);

  this.authService.getCity().subscribe( (data : City[])=>{
    this.cityList =data      
  }); 

  this.buyForm = new FormGroup(
    {
      sId: new FormControl('',[Validators.required]),
      pId: new FormControl('',[Validators.required]),
      pQty: new FormControl('',[Validators.required]),
      invDate: new FormControl('',[Validators.required]),
      ProdPrice: new FormControl('',[Validators.required]),
      customerId: new FormControl('',[Validators.required]),
      countId : new FormControl('',[Validators.required]),
      ciId: new FormControl('',[Validators.required]),
      shipAddress:new FormControl('',[Validators.required]),
      tax : new FormControl('',[Validators.required]),
      invAmount : new FormControl('',[Validators.required])
     

    }
  );

  
  this.authService.getSale().subscribe( (data : buy[])=>{
    this.buyList =data
  });




  
}


SubmitData(){
  console.log(this.productId)
  this.authService.postSale(
    {

    productId : this.productId,
    productQty: this.buyForm.get('pQty').value,
    
    productPrice: this.productPrice,
    custId: localStorage.getItem('customerId'),
    countryId: this.buyForm.get('countId').value,
    cityId: this.buyForm.get('ciId').value,
    shippedAddress: this.buyForm.get('shipAddress').value,
    
    }
  ).subscribe(res => console.log(res));
  location.reload();
}
 

onChangeCountry(countId : string)
{
  this.authService.getCityBycountry(countId).subscribe(data => this.city= data);
}
}
