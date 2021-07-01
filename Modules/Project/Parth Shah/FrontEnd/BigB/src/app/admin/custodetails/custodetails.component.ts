import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { custDetail } from './custdetail';

@Component({
  selector: 'app-custodetails',
  templateUrl: './custodetails.component.html',
  styleUrls: ['./custodetails.component.css']
})
export class CustodetailsComponent implements OnInit {
  custDetailList :custDetail[] = []; 
  custDetailForm : FormGroup;
  constructor(private authService: AuthServiceService ) { this.custDetailForm = new FormGroup(
    {
      custName: new FormControl('',[Validators.required]),
      add: new FormControl('',[Validators.required]),
      custCity: new FormControl('',[Validators.required]),
      custCountry : new FormControl('',[Validators.required]),
    }
  );
 }

  ngOnInit(): void {
    // this.authService.getCustDetail().subscribe( (data : custDetail[])=>{
    //   this.custDetailList =data
  
// });
}



  }
