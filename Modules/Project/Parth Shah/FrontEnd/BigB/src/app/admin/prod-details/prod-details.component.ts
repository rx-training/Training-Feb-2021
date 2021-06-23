import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { ProdDetail } from './prodDetail';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  prodDetailList :ProdDetail[] = []; 
  constructor(private authService: AuthServiceService ) { }

  ngOnInit(): void {
    this.authService.getProdDetail().subscribe( (data : ProdDetail[])=>{
      this.prodDetailList =data
  
});
  }

}
