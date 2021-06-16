import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _registerUrl = "https://localhost:44303/api/authenticate/register";
  private _loginUrl = "https://localhost:44303/api/authenticate/login";

  constructor(private http : HttpClient) { }

  registerUser(user : any){
    return this.http.post<any>(this._registerUrl,user);
  }
  loginUser(user : any){
    return this.http.post(this._loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
