import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProdList :Product[] = []; 
  productId : string;
  boolVal: boolean = false;
  prodForm : FormGroup;
  pId? : any;

  constructor(private authService: AuthServiceService ) { this.prodForm = new FormGroup(
    {
      pId: new FormControl('',[Validators.required]),
      pName: new FormControl('',[Validators.required]),
      brandId: new FormControl('',[Validators.required]),
      pprice: new FormControl('',[Validators.required]),
      pDescription : new FormControl('',[Validators.required]),
      ingre : new FormControl('',[Validators.required])
    }
  );
 }

 ngOnInit(): void {
  this.authService.getProduct().subscribe( (data : Product[])=>{
    this.ProdList =data
  });
}

SubmitData(){
  this.authService.postProduct(
    {
    productName : this.prodForm.get('pName').value,
    brandId: this.prodForm.get('brandId').value,
    productPrice: this.prodForm.get('pprice').value,
    productDescription : this.prodForm.get('pDescription').value,
    ingredients: this.prodForm.get('ingre').value
    }
  ).subscribe();
  alert('Product Created');
  location.reload();
}

edit(product)
{
  this.prodForm.get('pId').setValue(product.productId);
  this.prodForm.get('pName').setValue(product.productName);
  this.prodForm.get('brandId').setValue(product.brandId);
  this.prodForm.get('pprice').setValue(product.productPrice);
  this.prodForm.get('pDescription').setValue(product.productDescription),
  this.prodForm.get('ingre').setValue(product.ingredients)
}

update(){
  this.pId = this.prodForm.get('pId').value; 
  this.authService.putProduct(this.pId,
    {
      productName : this.prodForm.get('pName').value,
      brandId : this.prodForm.get('brandId').value,
      productPrice : this.prodForm.get('pprice').value,
      productDescription : this.prodForm.get('pDescription').value,
      ingredients: this.prodForm.get('ingre').value

      }

  ).subscribe(res=>console.log(res));
  alert('Product Updated');
  location.reload();
}



delete(pId){
  
  this.authService.deleteProduct(pId).subscribe(()=>console.log('Product deleted'));
  alert('Product deleted');
 location.reload();
}


}
