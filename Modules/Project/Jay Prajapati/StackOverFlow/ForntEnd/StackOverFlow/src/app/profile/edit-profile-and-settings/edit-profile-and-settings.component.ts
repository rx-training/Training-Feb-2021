import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-profile-and-settings',
  templateUrl: './edit-profile-and-settings.component.html',
  styleUrls: ['./edit-profile-and-settings.component.css']
})
export class EditProfileAndSettingsComponent implements OnInit {

  currentUserId: any;
  user: any;
  profileForm: FormGroup;
  constructor(private userService: UsersService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      FullName: ['', Validators.required],
      Location: [''],
      Title: [''],
      GitHub: [''],
      Twitter: [''],
      AboutUser: ['']
    });
  }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('userId');
    this.userService.getUserById(this.currentUserId).subscribe(
      (res: any) => {
        this.user = res;
        this.profileForm.setValue({
          FullName: res.fullName,
          Location: res.location,
          Title: res.title,
          GitHub: res.gitHub,
          Twitter: res.twitter,
          AboutUser: res.aboutUser
        });
      })
  }

  saveProfile(){
    this.user.fullName = this.profileForm.get('FullName')?.value;
    this.user.location = this.profileForm.get('Location')?.value;
    this.user.title = this.profileForm.get('Title')?.value;
    this.user.gitHub = this.profileForm.get('GitHub')?.value;
    this.user.twitter = this.profileForm.get('Twitter')?.value;
    this.user.aboutUser = this.profileForm.get('AboutUser')?.value;
    console.log(this.user);
    this.userService.putUser(this.currentUserId, this.profileForm.value).subscribe(
      res=>console.log(res)
    );
  }

}




  


