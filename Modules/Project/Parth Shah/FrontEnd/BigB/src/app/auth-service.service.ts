import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Brand } from './admin/brand/brand';
import { Cart } from './admin/cart/cart';
import { Category } from './admin/category/category';
import { City } from './admin/city/city';
import { Country } from './admin/country/country';
import { custDetail } from './admin/custodetails/custdetail';
import { Customer } from './admin/customer/customer';
import { ProdDetail } from './admin/prod-details/prodDetail';
import { Product } from './admin/product/product';
import { SaleCustomerDetail } from './admin/sale-customer/saleCustomer';
import { SaleDetail } from './admin/sale-detail/saleDetail';
import { Sale } from './admin/sale/sale';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient, private router : Router) { }
  login(data):Observable<any>{
return this.http.post(`${baseUrl}Authentication/login`,data);
  }



  register(data):Observable<any>{
    return this.http.post(`${baseUrl}Authentication/registerUser`,data);
  }

  registerUser(data):Observable<any>{
    return this.http.post(`${baseUrl}Authentication/registerUser`,data);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  
  }

  logOut()
  {
  
    //  localStorage.removeItem('token')
     localStorage.clear();
        this.router.navigate(['home'])
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

   getCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}Category`);
  }



  postCategory(category): Observable<Category> {
    return this.http.post<Category>(`${baseUrl}Category`, category)

  } 

  getCategoryById(categoryId): Observable<Category> {
    return this.http.get<Category>(`${baseUrl}Category/${categoryId}`);
  }

  
  putCategory(id,Category): Observable<Category> {  
   
    return this.http.put<Category>(`${baseUrl}Category/${id}`,JSON.stringify(Category), this.httpOptions)
  }

  deleteCategory(categoryId){
    return this.http.delete<Category>(`${baseUrl}Category/${categoryId}`, this.httpOptions);
  }

  // brand 

  getBrand() : Observable<Brand[]> {
    return this.http.get<Brand[]>(`${baseUrl}Brand`);
  }

  postBrand(brand): Observable<Brand> {
    return this.http.post<Brand>(`${baseUrl}Brand`, JSON.stringify(brand), this.httpOptions)

  } 
  putBrand(id,brand): Observable<Brand> {
    return this.http.put<Brand>(`${baseUrl}Brand/${id}`, JSON.stringify(brand), this.httpOptions)
  }

  deleteBrand(brandId){
    return this.http.delete<Brand>(`${baseUrl}Brand/${brandId}`, this.httpOptions);
  }

  getBrandByCatId(catId)
  {
    return this.http.get<Brand>(`${baseUrl}Brand/Category/${catId}`);
  }


  //product
  getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}Product`);
  }

  postProduct(product): Observable<Product> {
    return this.http.post<Product>(`${baseUrl}Product`, JSON.stringify(product), this.httpOptions)

  } 
  putProduct(id,product): Observable<Product> {
    return this.http.put<Product>(`${baseUrl}Product/${id}`, JSON.stringify(product), this.httpOptions)
  }

  deleteProduct(productId){
    return this.http.delete<Product>(`${baseUrl}Product/${productId}`, this.httpOptions);
  }

  getProductByBrandId(brandId)
  {
    return this.http.get<Brand>(`${baseUrl}Product/Brand/${brandId}`);
  }

  getProductById(productId): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}Product/${productId}`);
  }
  // sale
  getSale() : Observable<Sale[]> {
    return this.http.get<Sale[]>(`${baseUrl}sale`);
  }

  postSale(sale): Observable<Sale> {
    return this.http.post<Sale>(`${baseUrl}sale`, JSON.stringify(sale), this.httpOptions);
  } 

  deleteSale(saleId){
    return this.http.delete<Sale>(`${baseUrl}sale/${saleId}`, this.httpOptions);
  }
  putSale(id,sale): Observable<Sale> {
    return this.http.put<Sale>(`${baseUrl}sale/${id}`, JSON.stringify(sale), this.httpOptions)
  }

  

  //country
  getCountry() : Observable<Country[]> {
    return this.http.get<Country[]>(`${baseUrl}Country`);
  }
  postCountry(country): Observable<Country> {
    return this.http.post<Country>(`${baseUrl}Country`, JSON.stringify(country), this.httpOptions)

  } 
  putCountry(id,country): Observable<Country> {
    return this.http.put<Country>(`${baseUrl}Country/${id}`, JSON.stringify(country), this.httpOptions)
  }

  deleteCountry(countryId){
    return this.http.delete<Country>(`${baseUrl}Country/${countryId}`, this.httpOptions);
  }


  //city
  getCity() : Observable<City[]> {
    return this.http.get<City[]>(`${baseUrl}City`);
  }
  postCity(city): Observable<City> {
    return this.http.post<City>(`${baseUrl}City`, JSON.stringify(city), this.httpOptions)

  } 
  putCity(id,city): Observable<City> {
    return this.http.put<City>(`${baseUrl}City/${id}`, JSON.stringify(city), this.httpOptions)
  }

  deleteCity(cityId){
    return this.http.delete<City>(`${baseUrl}City/${cityId}`, this.httpOptions);
  }

  getCityBycountry(countId)
  {
    return this.http.get<City>(`${baseUrl}City/Country/${countId}`);
  }
  //customer

getCustomer() : Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}Customer`);
  }

  getCustomerbyId(id) {
    return this.http.get<Customer[]>(`${baseUrl}Customer/${id}`);
  }
  postCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(`${baseUrl}Customer`, JSON.stringify(customer), this.httpOptions)

  } 
  putCustomer(id,customer): Observable<Customer> {
    return this.http.put<Customer>(`${baseUrl}Customer/${id}`, JSON.stringify(customer), this.httpOptions)
  }

  deleteCustomer(customerId){
    return this.http.delete<Customer>(`${baseUrl}Customer/${customerId}`, this.httpOptions);
  }


  //cart

  getCart() : Observable<Cart[]> {
    return this.http.get<Cart[]>(`${baseUrl}Cart`);
  }

  getCartbyId(id) {
    return this.http.get<Cart[]>(`${baseUrl}Cart/${id}`);
  }

  postCart(cart): Observable<Cart> {
    return this.http.post<Cart>(`${baseUrl}Cart`, JSON.stringify(cart), this.httpOptions)
  } 
  putCart(id,cart): Observable<Cart> {
    return this.http.put<Cart>(`${baseUrl}Cart/${id}`, JSON.stringify(cart), this.httpOptions)
  }

  deleteCart(cartId){
    return this.http.delete<Cart>(`${baseUrl}Cart/${cartId}`, this.httpOptions);
  }
    
  getCartbyCustomerId(customerId){
    return this.http.get(`${baseUrl}Cart/cartDetail/${customerId}`);
  }


//get Prodct Detail
getProdDetail() : Observable<ProdDetail[]> {
  return this.http.get<ProdDetail[]>(`${baseUrl}productDetail`);

}


//get Sale Customer Detail

SaleCustomerDetail() : Observable<SaleCustomerDetail[]> {
  return this.http.get<SaleCustomerDetail[]>(`${baseUrl}salecustomer`);

}

//get sale detail
saleDetail() : Observable<SaleDetail[]> {
  return this.http.get<SaleDetail[]>(`${baseUrl}saledetail`);

}

getSalebyCustomerId(customerId){
  return this.http.get(`${baseUrl}SaleDetail/saleDetail/${customerId}`);
}

}
