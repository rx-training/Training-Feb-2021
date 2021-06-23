import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }
  intercept(req,next)
  {
    let authService = this.injector.get(AuthServiceService)
     let tokenReq = req.clone({
    setHeaders: {
      Authorization : `Bearer ${authService.getToken()}`
    }
  })

  return next.handle(tokenReq);

  }
}
