import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { SaleDetail } from './saleDetail';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  saleDetailList :SaleDetail[] = []; 

  constructor(private authService: AuthServiceService ) { }


  ngOnInit(): void {
    this.authService.saleDetail().subscribe( (data : SaleDetail[])=>{
      this.saleDetailList =data
  
});
  }

}
