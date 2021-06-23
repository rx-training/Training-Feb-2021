import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { City } from './city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cityList :City[] = [];
  cityId:string;
  boolVal: boolean = false;
  cityForm: FormGroup;
  cId? : any;
  
  constructor(private authService: AuthServiceService ){
    this.cityForm = new FormGroup(
      {
        ciId: new FormControl('',[Validators.required]),
        coId: new FormControl('',[Validators.required]),
        ciName: new FormControl('',[Validators.required])
      }
    );
   }

   ngOnInit(): void {
    this.authService.getCity().subscribe((data : City[])=>{
      this.cityList =data
    });
  }

  SubmitData(){
    this.authService.postCity(
      {
      countryId : this.cityForm.get('coId').value,
      cityName : this.cityForm.get('ciName').value,
      }
    ).subscribe();
    alert('City Created');
    location.reload();
  }

  edit(city)
  {
    this.cityForm.get('ciId').setValue(city.cityId);
    this.cityForm.get('coId').setValue(city.countryId);
    this.cityForm.get('ciName').setValue(city.cityName);
  }

  update(){
    this.cId = this.cityForm.get('ciId').value; 
    this.authService.putCity(this.cId,
      {
        // brandName : this.countForm.get('coId').value,
        countryId : this.cityForm.get('coId').value,
        cityName : this.cityForm.get('ciName').value
        }
  
    ).subscribe(res=>console.log(res));
    alert('City Updated');
    location.reload();
  }


delete(ctId){
  
  this.authService.deleteCity(ctId).subscribe(()=>console.log('user deleted'));
  alert('City deleted');
 location.reload();
}

}
