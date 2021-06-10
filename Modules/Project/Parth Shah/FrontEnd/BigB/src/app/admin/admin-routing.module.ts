import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrandComponent } from './brand/brand.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';

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
    {path:'address', component: AddressComponent},
    {path:'cart', component: CartComponent},
    {path:'customer', component: CustomerComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
