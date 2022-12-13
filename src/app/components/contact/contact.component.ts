import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { producto } from '../producto';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  productoForm: FormGroup;

  constructor(private fb:FormBuilder,
    private router: Router,
    private productoService: ProductoService) { 
  this.productoForm =this.fb.group({
    nombre:['',Validators.required],
    categoria:['',Validators.required],
    juego:['',Validators.required],
    precio:['',Validators.required]
  })
  }
  ngOnInit(): void {
  }
    agregarProducto(){
 
 
    
      console.log(this.productoForm.value);
      this.productoService.guardarProductos(this.productoForm.value).subscribe(data=> {
      this.router.navigate (['/config']);
      }, error=>{
        console.log(error);
        this.productoForm.reset();

      }
    
      )
      
      }
    }
  
  

