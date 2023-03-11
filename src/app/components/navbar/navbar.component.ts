import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private auth: AuthService) {}

  get getUsername() {
    return this.auth.currentuser?.username;
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn;
    console.log(this.auth.isLoggedIn);
  }

  logout() {
    this.auth.logOut();
  }


}
