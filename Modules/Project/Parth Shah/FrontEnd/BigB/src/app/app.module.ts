import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavComponent } from './nav/nav.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthServiceService } from './auth-service.service';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AddtoCartComponent } from './addto-cart/addto-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuyMessageComponent } from './buy-message/buy-message.component';
import { CartMessageComponent } from './cart-message/cart-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    NavComponent,
    ProductDetailComponent,
    BuyNowComponent,
    AddtoCartComponent,
    PageNotFoundComponent,
    BuyMessageComponent,
    CartMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [AuthGuard , AuthServiceService,{
    provide: HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
