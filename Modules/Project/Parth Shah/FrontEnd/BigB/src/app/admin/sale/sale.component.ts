import { Component, OnInit } from '@angular/core';
import { Sale } from './sale';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  saleList :Sale[] = []; 
  saleId : string;
  boolVal: boolean = false;
  saleForm : FormGroup;
  sId? : any;

  constructor(private authService: AuthServiceService ) { this.saleForm = new FormGroup(
    {
      sId: new FormControl('',[Validators.required]),
      pId: new FormControl('',[Validators.required]),
      pQty: new FormControl('',[Validators.required]),
      dis : new FormControl('',[Validators.required]),
      grossAmt: new FormControl('',[Validators.required]),
      invDate: new FormControl('',[Validators.required]),
      ProdPrice: new FormControl('',[Validators.required]),
      customerId: new FormControl('',[Validators.required]),
      shipAddress:new FormControl('',[Validators.required]),
      tax : new FormControl('',[Validators.required]),
      invAmount : new FormControl('',[Validators.required])


    }
  );
 }

 ngOnInit(): void {
  this.authService.getSale().subscribe( (data : Sale[])=>{
    this.saleList =data
  });
}

SubmitData(){
  this.authService.postSale(
    {
    id: this.saleForm.get('sId').value,
    productId : this.saleForm.get('pId').value,
    productQty: this.saleForm.get('pQty').value,
    discount: this.saleForm.get('dis').value,
    grossAmount: this.saleForm.get('grossAmt').value,
    invoiceDate: this.saleForm.get('invDate').value,
    productPrice: this.saleForm.get('ProdPrice').value,
    custId: this.saleForm.get('customerId').value,
    shippedAddress: this.saleForm.get('shipAddress').value,
    taxes: this.saleForm.get('tax').value,
    invoiceAmount: this.saleForm.get('invAmount').value
    }
  ).subscribe();
  location.reload();
}
 

edit(sale)
{
  this.saleForm.get('sId').setValue(sale.id);
  this.saleForm.get('pId').setValue(sale.productId);
  this.saleForm.get('pQty').setValue(sale.productQty);
  this.saleForm.get('dis').setValue(sale.discount);
  this.saleForm.get('grossAmt').setValue(sale.grossAmount);
  this.saleForm.get('invDate').setValue(sale.invoiceDate);
  this.saleForm.get('ProdPrice').setValue(sale.productPrice);
  this.saleForm.get('customerId').setValue(sale.custId);
  this.saleForm.get('shipAddress').setValue(sale.shippedAddress);
  this.saleForm.get('tax').setValue(sale.taxes);
  this.saleForm.get('invAmount').setValue(sale.invoiceAmount);  
}


update(){
  this.sId = this.saleForm.get('sId').value; 
  this.authService.putSale(this.sId,
    {
      productId : this.saleForm.get('pId').value,
      productQty : this.saleForm.get('pQty').value,
      discount : this.saleForm.get('dis').value,
      grossAmount : this.saleForm.get('grossAmt').value,
      invoiceDate: this.saleForm.get('invDate').value,
      productPrice: this.saleForm.get('ProdPrice').value,
      custId: this.saleForm.get('customerId').value,
      shippedAddress: this.saleForm.get('shipAddress').value,
      taxes: this.saleForm.get('tax').value,
      invoiceAmount: this.saleForm.get('invAmount').value
      }

  ).subscribe(res=>console.log(res));
  location.reload();
}


delete(sId){
  
  this.authService.deleteSale(sId).subscribe(()=>console.log('sale deleted'));
  alert('Product deleted');
 location.reload();
}

}
