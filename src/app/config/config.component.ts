import { Component, OnInit } from '@angular/core';
import { producto } from '../components/producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
listProductos: producto [] = [];
  constructor(private productoService:ProductoService)
   {

   }

  ngOnInit(): void {
    this.obtenerProductos();
    
  }
  obtenerProductos(){
    this.productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos = data;
    }, error=> {
      console.log(error);
    })
  }
  eliminarProducto(_id:any){
    this.productoService.eliminarProductos(_id).subscribe(data =>{
alert("the product was delate")
window.location.reload();
    })
  }
}
