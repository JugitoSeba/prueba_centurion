import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  lista_productos:any=[]
  buscar:string=''

  constructor() { }

  ngOnInit(): void {
    this.mostrar_productos()
  }

  async mostrar_productos()
  {
    const datos_recibidos=await fetch('https://dummyjson.com/products')
    const productos_lugar=await datos_recibidos.json()

    this.lista_productos=productos_lugar.products
  }
}