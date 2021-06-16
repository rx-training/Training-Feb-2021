import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUserId : any;
  user : any;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('userId');
    this.userService.getUserById(this.currentUserId).subscribe(
      res=>this.user = res
    )
  }

}
