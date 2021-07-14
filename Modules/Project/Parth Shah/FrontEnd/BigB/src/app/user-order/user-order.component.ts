import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SaleDetail } from '../admin/sale-detail/saleDetail';
import { AuthServiceService } from '../auth-service.service';
import { ProductImages } from '../prodImage';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  constructor(private authService: AuthServiceService, private route:ActivatedRoute ) { }
  cId : any;
  saleDetail : any;
  saleDetailList :any; 

  ngOnInit(): void {

    this.cId = localStorage.getItem('customerId');
    // this.authService.getSalebyCustomerId(this.cId).subscribe((data)=> {
    //   this.saleDetail= data;
    //   console.log(data);
    // });

    this.authService.getSalebyCustomerId(this.cId).subscribe((data)=>{
      this.saleDetailList =data;
  
});
  }
  

}
