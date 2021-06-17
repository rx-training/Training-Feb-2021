import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _baseUrl = environment.baseUrl;
  //private _registerUrl = "https://localhost:44303/api/authenticate/register";
  //private _loginUrl = "https://localhost:44303/api/authenticate/login";

  constructor(private http : HttpClient) { }

  registerUser(user : any){
    return this.http.post<any>(`${this._baseUrl}/authenticate/register`,user);
  }
  loginUser(user : any){
    return this.http.post(`${this._baseUrl}/authenticate/login`, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
