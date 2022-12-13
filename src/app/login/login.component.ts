import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) { 
    this.loginForm = this.fb.group({
      usuario:['',Validators.required],
      password: ['',Validators.required]
      
    })
   
  }

  ngOnInit(): void {

  }
  LoginUser(){
    this.authService.LoginUser(this.loginForm.value)
    .subscribe(
      res =>{
        console.log(res)
        localStorage.setItem('token',res.token);
        localStorage.setItem('role',res.role);
        this.router.navigate(['./private']);
      },
      err => console.log(err)
    )
  }

}