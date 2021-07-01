import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrandComponent } from './brand/brand.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { CustodetailsComponent } from './custodetails/custodetails.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { SaleCustomerComponent } from './sale-customer/sale-customer.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BrandComponent,
    AdhomeComponent,
    CategoryComponent,
    ProductComponent,
    SaleComponent,
    CountryComponent,
    CityComponent,
    CartComponent,
    CustomerComponent,
    CustodetailsComponent,
    ProdDetailsComponent,
    SaleCustomerComponent,
    SaleDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
