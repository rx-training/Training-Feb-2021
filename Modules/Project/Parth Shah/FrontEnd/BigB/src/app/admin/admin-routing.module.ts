import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: 'dashboard', component :DashboardComponent,
  children:[
    {path: 'adhome', component:AdhomeComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'brand', component: BrandComponent},
    {path:'product', component: ProductComponent},
    {path:'sale', component: SaleComponent},
    {path:'city', component: CityComponent},    
    {path:'country', component: CountryComponent},
    {path:'cart', component: CartComponent},
    {path:'customer', component: CustomerComponent},
    {path:'custDetail' ,component: CustodetailsComponent},
    {path: 'prodetail' ,component: ProdDetailsComponent },
    {path: 'saleCust' ,component: SaleCustomerComponent },
    {path: 'saledetail' ,component: SaleDetailComponent }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
