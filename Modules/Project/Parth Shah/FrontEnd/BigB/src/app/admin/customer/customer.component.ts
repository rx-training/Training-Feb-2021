import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer';
import { AuthServiceService } from 'src/app/auth-service.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custList :Customer[] = []; 
  custId : string;
  boolVal: boolean = false;
  custForm : FormGroup;
  cId? : any;
  
  constructor(private authService: AuthServiceService ) { this.custForm = new FormGroup(
    {
      cuId: new FormControl('',[Validators.required]),
      cuName: new FormControl('',[Validators.required]),
     add: new FormControl('',[Validators.required]),
      PhNo : new FormControl('',[Validators.required]),
    }
  );
 }

 ngOnInit(): void {
  this.authService.getCustomer().subscribe( (data : Customer[])=>{
    this.custList =data
  });
}


SubmitData(){
  this.authService.postCustomer(
    {
    custName : this.custForm.get('cuName').value,
    address: this.custForm.get('add').value,
    phoneNo: this.custForm.get('PhNo').value,
    }
  ).subscribe();
  alert('Customer Created');
  location.reload();
}

edit(customer)
{
  this.custForm.get('cuId').setValue(customer.custId);
  this.custForm.get('cuName').setValue(customer.custName);
  this.custForm.get('add').setValue(customer.address);
  this.custForm.get('PhNo').setValue(customer.phoneNo);
  
}

update(){
  this.cId = this.custForm.get('cuId').value; 
  this.authService.putCustomer(this.cId,
    {
      // brandName : this.countForm.get('coId').value,
      custName : this.custForm.get('cuName').value,
      address : this.custForm.get('add').value,
      phoneNo : this.custForm.get('PhNo').value
      }

  ).subscribe(res=>console.log(res));
  alert('Customer Updated');
  location.reload();
}


delete(cuId){
  
  this.authService.deleteCustomer(cuId).subscribe(()=>console.log('Customer deleted'));
  alert('Customer deleted');
 location.reload();
}


}
