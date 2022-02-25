import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor(public userService:UsersService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }
  
  getUserLogged() {
    this.userService.getUser(localStorage!.getItem('auth_token')!).subscribe( data => {
      console.log(data);
    });
  }
}
