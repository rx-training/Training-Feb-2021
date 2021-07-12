import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Customer } from './userProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  customer :any; 
  custId : string;
  boolVal: boolean = false;
  custForm : FormGroup;
  cId : any;

  
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
  this.cId = localStorage.getItem('customerId');
  this.authService.getCustomerbyId(this.cId).subscribe( (data)=>{
    this.customer =data
  });
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


}
