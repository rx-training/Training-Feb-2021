import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { SaleCustomerDetail } from './saleCustomer';

@Component({
  selector: 'app-sale-customer',
  templateUrl: './sale-customer.component.html',
  styleUrls: ['./sale-customer.component.css']
})
export class SaleCustomerComponent implements OnInit {
  saleCustomerList :SaleCustomerDetail[] = []; 

  constructor(private authService: AuthServiceService ) { }


  ngOnInit(): void {
    this.authService.SaleCustomerDetail().subscribe( (data : SaleCustomerDetail[])=>{
      this.saleCustomerList =data
  
});
  }

}
