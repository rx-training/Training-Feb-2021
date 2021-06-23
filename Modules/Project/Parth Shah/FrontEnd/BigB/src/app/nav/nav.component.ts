import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Emitters } from '../emitter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;
  constructor( private authService: AuthServiceService, private router : Router) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }


//   userIsLoggedIn()
//   {
//  return  this.authService.loggedIn();
    
//   }

  

//   logout()
// {  localStorage.removeItem('token');

// this.router.navigate(['home']); 
// Emitters.authEmitter.emit(false);
// }

}


