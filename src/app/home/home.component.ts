import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../models/Usuario';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  usuarioData?: IUsuario;

  constructor(public userService:UsersService, public router: Router) { }

  ngOnInit(): void {
    this.getUserLogged();
  }
  
  getUserLogged() {
    this.userService.getUser(localStorage!.getItem('auth_token')!).subscribe( (data: any) => {
      //console.log(data);
      this.usuarioData = data;
    });
  }

  exitSession(){
    localStorage.removeItem('auth_token');
    this.router.navigateByUrl('login');
  }
}
