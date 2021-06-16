import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : any;
  currentUserId : any;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('userId');
    this.userService.getUserById(this.currentUserId).subscribe(
      res=>this.currentUser = res
    )
  }

}
