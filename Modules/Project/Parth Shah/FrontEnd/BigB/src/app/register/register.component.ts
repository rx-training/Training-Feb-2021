import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;
  constructor(
    private authService: AuthServiceService ,
    private router : Router) { }


    ngOnInit(): void {
      this.initform();
     
    }

    initform()
    {
      this.form = new FormGroup(
        {
          Email: new FormControl('',[Validators.required,Validators.email]),
          Username:new FormControl('',[Validators.required]),
          Password:new FormControl('',[Validators.required])
        }
      );
  
    }

    get Email()
   {
     return this.form.get('Email')
    };
    get Username()
   {
     return this.form.get('Username')
    };

    get Password()
   {
     return this.form.get('Password')
    };

    
    submit()
{

  if(this.form.valid)

    {
      this.authService.register(this.form.value).subscribe(res=>{
        if(res.status=="Success"){
          console.log(res);
          alert(res.message);
     
          this.router.navigate(['/login']); 
          
        }
        else{
          alert(res.message);
        }

       

      });
}
}
}
