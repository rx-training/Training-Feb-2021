import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder,private _auth : AuthenticationService, private route : Router) { }

  registrationForm = this.fb.group({
    Username: ['',[Validators.required,Validators.minLength(3)]],
    FullName : ['',Validators.required],
    Email : ['',[Validators.required,Validators.email]],
    Password : ['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]] //
  });
  ngOnInit(): void {
  }

  get userName(){
    return this.registrationForm.get('Username')!;
  }
  get fullName(){
    return this.registrationForm.get('FullName')!;
  }
  get email(){
    return this.registrationForm.get('Email')!;
  }
  get password(){
    return this.registrationForm.get('Password')!;
  }

  registerUser(){
    //debugger;
    this._auth.registerUser(this.registrationForm.value)
    .subscribe(
      res => {
        if(res.status == "Success"){
          console.log(res.status);
          this.route.navigate(['login']);
        }
        console.log(res)
      }
      
    )
  }

  loginUser(){
    this.route.navigate(['login']);
  }
}
