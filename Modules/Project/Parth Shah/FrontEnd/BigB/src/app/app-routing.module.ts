import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from './auth.guard';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AddtoCartComponent } from './addto-cart/addto-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAuthGuard } from './user-auth.guard';
import { BuyMessageComponent } from './buy-message/buy-message.component';
import { CartMessageComponent } from './cart-message/cart-message.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserBasketComponent } from './user-basket/user-basket.component';
import { UserOrderComponent } from './user-order/user-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent}, 
  {path : 'profile', component: UserProfileComponent},
  {path : 'basket', component: UserBasketComponent},
  {path : 'userorder', component: UserOrderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent },
  {path:'adminLogin',component:AdminLoginComponent},
  {path: 'dashboard' ,component:DashboardComponent , canActivate:[AuthGuard]},
  
  {path : 'productDetail/:id', component:ProductDetailComponent , 
   children: [
    {path: 'buy/:productId' , component: BuyNowComponent , canActivate:[UserAuthGuard]},
    {path: 'cart/:productId' , component: AddtoCartComponent,  canActivate:[UserAuthGuard]},
  {path: 'buymessage' ,component:BuyMessageComponent },

   ]},
   {path: 'cartmessage' ,component:CartMessageComponent },

   
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule)
  },
  { path: '**',   component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
