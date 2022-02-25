import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  email?: string;
  password?: string;
  confirmPassword? : string;

  constructor(public userservice: UsersService, public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userservice.register(user).subscribe(data => {
      this.userservice.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  }

}
