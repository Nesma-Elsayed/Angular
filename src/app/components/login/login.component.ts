import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
constructor(private authservice : AuthService ,private router :Router){}
loginname:string='';
password:string='';

login(){

this.authservice.login(this.loginname,this.password);
this.router.navigate(['/product']);
}

}
