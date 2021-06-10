import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Address } from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressList :Address[] = []; 
  addrId : string;
  boolVal: boolean = false;
  addrForm : FormGroup;
  aId? : any;
  


 constructor(private authService: AuthServiceService ) { this.addrForm = new FormGroup(
    {
      adId: new FormControl('',[Validators.required]),
      addName: new FormControl('',[Validators.required]),
      ctId : new FormControl('',[Validators.required])
    }
  );
 }

 ngOnInit(): void {
  this.authService.getAddress().subscribe( (data : Address[])=>{
    this.addressList =data
  });
}

SubmitData(){
  this.authService.postAddress(
    {
    addrId: this.addrForm.get('adId').value,
    address1 : this.addrForm.get('addName').value,
    cityId: this.addrForm.get('ctId').value,
    }
  ).subscribe();
  alert('Address Created');
  location.reload();
}

edit(address)
{
  this.addrForm.get('adId').setValue(address.addrId);
  this.addrForm.get('addName').setValue(address.address1);
  this.addrForm.get('ctId').setValue(address.cityId);
  
}

update(){
  this.aId = this.addrForm.get('adId').value; 
  this.authService.putAddress(this.aId,
    {
      // brandName : this.countForm.get('coId').value,
      address1 : this.addrForm.get('addName').value,
      cityId : this.addrForm.get('ctId').value
      }

  ).subscribe(res=>console.log(res));
  console.log('Address Updated ');
  location.reload();
}


delete(aId){
  
  this.authService.deleteAddress(aId).subscribe(()=>console.log('Address deleted'));
  alert('Address deleted');
 location.reload();
}


}
