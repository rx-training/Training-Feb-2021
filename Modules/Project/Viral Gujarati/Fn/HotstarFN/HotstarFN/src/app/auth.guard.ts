import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthenticationService,
  private _router: Router) { }
  

  canActivate():boolean{
    if(this._authService.loggedIn()){
      return true
    }
    else{
      alert("Please login to continue...")
      return false
    }
  }
}
