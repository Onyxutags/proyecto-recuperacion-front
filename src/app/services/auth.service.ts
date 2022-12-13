import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ='http://localhost:3000/api'
  constructor(private http: HttpClient, private router:Router ) { }

 usuarioNuevo(newUser: any) {
   return this.http.post<any>(this.URL + '/register', newUser);
  }
  LoginUser(user: any) {
    return this.http.post<any>(this.URL + '/login', user);
   }
   loggedIn(){
    return !!localStorage.getItem('token');
   }
   //parte 1
  getToken(){
    return localStorage.getItem('token');

  }
  getRole(){
    return localStorage.getItem('role');
  }
//parte 2
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['./login'])

  }
}

