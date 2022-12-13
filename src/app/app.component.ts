import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-Root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService){}

 
  loggedin(){
    return this.authService.loggedIn();
  }
  
  logout(){
    return this.authService.logout();
  }
  getRole(){
    return this.authService.getRole();
   }
}
