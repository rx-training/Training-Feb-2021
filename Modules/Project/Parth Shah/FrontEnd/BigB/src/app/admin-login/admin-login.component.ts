import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminForm : FormGroup;

  constructor(private authService: AuthServiceService ,
    private router : Router) { }

  ngOnInit(): void {
    this.initForm();

  }

  initForm()
  {
    this.adminForm = new FormGroup(
      {
        Username : new FormControl('',[Validators.required]),
        Password : new FormControl('',[Validators.required])
      }
    );

  }
  get Username()
   {
     return this.adminForm.get('Username')
    };

    get Password()
   {
     return this.adminForm.get('Password')
    };


  loginProcess()
  {

    if(this.adminForm.valid)
    {
      this.authService.login(this.adminForm.value).subscribe(result=>{
        if(result.status=="Success"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['/dashboard']); 

          
        }
        else{
          alert(result.message);
        }

       

      });
    }
  }
}
