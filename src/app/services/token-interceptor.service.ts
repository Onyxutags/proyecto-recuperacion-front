import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest, HttpHandler  } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
       
    
       const tokenizeReq=req.clone({
       setHeaders: {
       Athorizacion: `Bearer ${this.authService.getToken()}`

      }})

       return next.handle(tokenizeReq);
      }
  }