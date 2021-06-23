import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Country } from './country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  CountryList :Country[] = []; 
  countryId:string;
  boolVal: boolean = false;
  countForm: FormGroup;
  cId? : any;
  
  constructor(private authService: AuthServiceService ) {
    this.countForm = new FormGroup(
      {
        coId: new FormControl('',[Validators.required]),
        coName: new FormControl('',[Validators.required])
      }
    );
  }
  ngOnInit(): void {
    this.authService.getCountry().subscribe( (data : Country[])=>{
      this.CountryList =data
    });
  }

  SubmitData(){
    this.authService.postCountry(
      {
      countryName : this.countForm.get('coName').value,
      }
    ).subscribe();
    alert('Country Created');
    location.reload();
  }

  edit(country)
  {
    this.countForm.get('coId').setValue(country.countryId);
    this.countForm.get('coName').setValue(country.countryName);
  }

  update(){
    this.cId = this.countForm.get('coId').value; 
    this.authService.putCountry(this.cId,
      {
        // brandName : this.countForm.get('coId').value,
        countryName : this.countForm.get('coName').value
        }
  
    ).subscribe(res=>console.log(res));
    alert('Country Updated');
    location.reload();
  }
  
  delete(coId){
  
    this.authService.deleteCountry(coId).subscribe(()=>console.log('user deleted'));
    alert('Country deleted');
   location.reload();
  }
}
