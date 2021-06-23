import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { cart } from './cart';

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.css']
})
export class AddtoCartComponent implements OnInit {

  cartList : cart[];
  cartForm : FormGroup;
  productId : any;


  constructor(private authService: AuthServiceService, private route : ActivatedRoute) { 
    this.productId = parseInt(this.route.snapshot.paramMap.get('productId'));
  
    
   }
  ngOnInit(): void {
    this.cartForm = new FormGroup(
      {
        caId: new FormControl('',[Validators.required]),
      pId: new FormControl('',[Validators.required]),
      cuId: new FormControl('',[Validators.required])
      }
    )
  }


  SubmitData(){
    console.log(this.productId)
    this.authService.postCart(
      {
  
      productId : this.productId,
      
      custId: localStorage.getItem('customerId'),
      
      }
    ).subscribe(res => console.log(res));
    location.reload();
  }

}
