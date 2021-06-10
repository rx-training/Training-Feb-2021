import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Address } from './admin/address/address';
import { Brand } from './admin/brand/brand';
import { Cart } from './admin/cart/cart';
import { Category } from './admin/category/category';
import { City } from './admin/city/city';
import { Country } from './admin/country/country';
import { Customer } from './admin/customer/customer';
import { Product } from './admin/product/product';
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
  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
return this.http.post(`${baseUrl}Authentication/login`,data);
  }
  
  register(data):Observable<any>{
    return this.http.post(`${baseUrl}Authentication/registerAdmin`,data);
  }

   getCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}Category`);
  }



  postCategory(category): Observable<Category> {
    return this.http.post<Category>(`${baseUrl}Category`, JSON.stringify(category), this.httpOptions)

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


  //product
  getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}Products`);
  }

  postProduct(product): Observable<Product> {
    return this.http.post<Product>(`${baseUrl}Products`, JSON.stringify(product), this.httpOptions)

  } 
  putProduct(id,product): Observable<Product> {
    return this.http.put<Product>(`${baseUrl}Products/${id}`, JSON.stringify(product), this.httpOptions)
  }

  deleteProduct(productId){
    return this.http.delete<Product>(`${baseUrl}Products/${productId}`, this.httpOptions);
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


  //customer

getCustomer() : Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}Customer`);
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
    return this.http.get<Cart[]>(`${baseUrl}Carts`);
  }

  postCart(cart): Observable<Cart> {
    return this.http.post<Cart>(`${baseUrl}Carts`, JSON.stringify(cart), this.httpOptions)
  } 
  putCart(id,cart): Observable<Cart> {
    return this.http.put<Cart>(`${baseUrl}Carts/${id}`, JSON.stringify(cart), this.httpOptions)
  }

  deleteCart(cartId){
    return this.http.delete<Cart>(`${baseUrl}Carts/${cartId}`, this.httpOptions);
  }

//address 

getAddress() : Observable<Address[]> {
  return this.http.get<Address[]>(`${baseUrl}Addresses`);
}

postAddress(address): Observable<Address> {
  return this.http.post<Address>(`${baseUrl}Addresses`, JSON.stringify(address), this.httpOptions)

} 
putAddress(id,address): Observable<Address> {
  return this.http.put<Address>(`${baseUrl}Addresses/${id}`, JSON.stringify(address), this.httpOptions)
}

deleteAddress(addrId){
  return this.http.delete<Address>(`${baseUrl}Addresses/${addrId}`, this.httpOptions);
}

}
