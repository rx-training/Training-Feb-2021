import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private auth : AuthServiceService, private router : Router)
  {  }

  canActivate(): boolean {
    if(this.auth.loggedIn())
    {
      return true;
    }
    else 
    {
      this.router.navigate(['/login']);
    return false;
      }
  }
  
}
