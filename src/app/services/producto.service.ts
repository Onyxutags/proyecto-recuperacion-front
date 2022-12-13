import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { producto } from '../components/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }
getProductos(): Observable<any>{
  return this.http.get(this.url + '/productos');

}
  eliminarProductos(id: string): Observable<any>{
  return this.http.delete(this.url + '/productos/' +id);
  
} 
guardarProductos(producto:producto): Observable<any>{
  return this.http.post(this.url + '/productos',producto);
  
} 
   }

