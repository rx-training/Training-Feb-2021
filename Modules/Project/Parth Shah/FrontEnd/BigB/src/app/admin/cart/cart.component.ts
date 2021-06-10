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
  cartId:string;
  boolVal: boolean = false;
  cartForm: FormGroup;
  constructor(private authService: AuthServiceService ) {
    this.cartForm = new FormGroup(
      {
        caId: new FormControl('',[Validators.required]),
        times: new FormControl('',[Validators.required])
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
      cartId : this.cartForm.get('caId').value,
      time : this.cartForm.get('times').value,
      }
    ).subscribe();
    location.reload();
  }

  edit(cart)
  {
    this.cartForm.get('caId').setValue(cart.cartId);
    this.cartForm.get('times').setValue(cart.time);
  }

  update(){
    this.authService.putCart(this.cartId,
      { 
        cartId : this.cartForm.get('caId').value,
        time : this.cartForm.get('times').value       

}
    );
}

  delete(caId){
  
    this.authService.deleteCart(caId).subscribe(()=>console.log('user deleted'));
    alert('Cart deleted');
   location.reload();
  }
  
}
