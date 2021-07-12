import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ProductImages } from '../prodImage';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {
  cart :any; 
  custId : string;
  boolVal: boolean = false;
  cartForm : FormGroup;
  cId : any;
  cartDetail : any;
  productId;
  productImg;
  constructor(private authService: AuthServiceService, private route:ActivatedRoute  ) {
    this.cartForm = new FormGroup(
      {
        caId: new FormControl('',[Validators.required]),
        custId: new FormControl('',[Validators.required]),
        productId: new FormControl('',[Validators.required]),

      }
    );
  }

  ngOnInit(): void {
    this.cId = localStorage.getItem('customerId');
    // this.authService.getCartbyId(this.cId).subscribe( (data)=>{
    //   this.cart =data
    // });

    this.authService.getCartbyCustomerId(this.cId).subscribe((data)=> {
      this.cartDetail= data;
      console.log(data);
    });

this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
this.productImg = ProductImages.get(this.productId);
console.log(this.productImg);


  }






}
