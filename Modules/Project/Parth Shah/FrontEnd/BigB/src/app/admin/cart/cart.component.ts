import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList :Cart[] = []; 
  cartId:number;
  boolVal: boolean = false;
  cartForm: FormGroup;
  constructor(private authService: AuthServiceService ) {
    this.cartForm = new FormGroup(
      {
        caId: new FormControl('',[Validators.required]),
        custId: new FormControl('',[Validators.required]),
        productId: new FormControl('',[Validators.required]),

      }
    );
  }
  ngOnInit(): void {
    this.authService.getCart().subscribe( (data : Cart[])=>{
      this.cartList =data
    });
  }


  
  SubmitData(){
    this.authService.postCart(
      {
      custId : this.cartForm.get('custId').value,
      productId : this.cartForm.get('productId').value,

      }
    ).subscribe();
    alert('Cart Created');
    location.reload();
  }

  edit(cart)
  {
    this.cartForm.get('caId').setValue(cart.cartId);
    this.cartForm.get('custId').setValue(cart.custId);
    this.cartForm.get('productId').setValue(cart.productId);
  }

  update(){
    this.cartId = this.cartForm.get('caId').value;
    this.authService.putCart(this.cartId,
      { 
        // cartId : this.cartForm.get('caId').value,
        custId : this.cartForm.get('custId').value,
        productId : this.cartForm.get('productId').value
  
}
    ).subscribe(res=>console.log(res));
    alert('Cart Updated');
    location.reload();
}

  delete(caId){
  
    this.authService.deleteCart(caId).subscribe(()=>console.log('user deleted'));
    alert('Cart deleted');
   location.reload();
  }
  
}
