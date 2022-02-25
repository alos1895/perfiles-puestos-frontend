import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(public userservice: UsersService, public router: Router) {}

  ngOnInit(): void {}

  login() {
    const user = { email: this.email, password: this.password };

    this.userservice.login(user).subscribe((data) => {
      this.userservice.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }
}
