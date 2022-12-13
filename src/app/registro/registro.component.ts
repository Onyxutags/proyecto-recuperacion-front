import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { __asyncValues } from 'tslib';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  usuariosForm:FormGroup;
  passwordValida: boolean =true;
  patron = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;
  

  constructor(private fb: FormBuilder,  private authService: AuthService, private router: Router ){

    this.usuariosForm = this.fb.group({
    usuario:['',Validators.required],
    numero:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    role:['usuario',Validators.required]
    }) 
  }
  ngOnInit(): void {

  }
 

  usuarioNuevo(){
    const password = this.usuariosForm.value.password;

    if(this.patron.test(password)){
      this.passwordValida=true;
      console.log("Contraseña correcta")
      console.log(this.usuariosForm.value)
      this.authService.usuarioNuevo(this.usuariosForm.value)
      .subscribe(
       res => {
       console.log(res)
       localStorage.setItem('token',res.token);
       this.router.navigate(['./verification']);
       },
       err => console.log(err)
     )
      
    }else{
      this.passwordValida=false;
      alert("La contraseña debe de tener al menos una letra mayuscula y minuscula, minimo un numero o caracter especial, ademas de tener al menos 8 digitos")
      return;
    }
}
}
  
 


