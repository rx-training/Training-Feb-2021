import { Injectable } from '@angular/core';
import {  CanActivate, Router , UrlTree } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth : AuthServiceService, private router : Router)
  {  }

  canActivate(): boolean {
    if(this.auth.loggedIn())
    {
      return true;
    }
    else 
    {
      this.router.navigate(['/adminLogin']);
    return false;
      }
  }

  
  
}
