import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(public userservice: UsersService) { }

  ngOnInit(): void {
  }

  login(){
    const user = {  email: this.email, password: this.password };
    console.log(user);


    this.userservice.login(user).subscribe( daya => {
      console.log(daya);
    });
  }
}
