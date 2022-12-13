export class producto{
    _id?: number;
    nombre: string;
    categoria: string;
    precio: number;

    constructor (nombre: string, categoria: string, ubicacion: string, precio:number){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    }
}