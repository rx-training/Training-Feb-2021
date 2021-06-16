import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUserToken : any;
  public error : any;
  @Output() public childEvent = new EventEmitter();


  constructor(private fb : FormBuilder,private _auth : AuthenticationService,private route:Router) { }

  loginForm = this.fb.group({
    Username: ['',[Validators.required,Validators.minLength(3)]],
    Password : ['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]]
  });
  ngOnInit(): void {
  }

  get userName(){
    return this.loginForm.get('Username')!;
  }
  get password(){
    return this.loginForm.get('Password')!;
  }

  loginUser(){
    
    this._auth.loginUser(this.loginForm.value)
      .subscribe(
        (res: any) => {
          if (res.response.status == "Success") {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId',res.user);
            // console.log(res);
            // this.currentUserToken = res;
            // this.childEvent.emit("Hello World");
            console.log(res.response.message);
            //console.log(res.token);
            this.route.navigate(['']);
              
          } else {
            alert(res.message);
          }


        },

      );

      
    // if(this.currentUser.response.status == "Success"){
    //   this.route.navigate(['']);
    // }else{
    //   alert(this.error);
    // }
  }

  registerUser(){
    this.route.navigate(['register']);
  }

}
