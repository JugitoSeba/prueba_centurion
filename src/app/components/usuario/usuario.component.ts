import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  lista_usuarios:any=[]
  direccion:string=''

  constructor() { }

  ngOnInit(): void {
  }

  async obtener_usuarios()
  {
    const datos_recibidos=await fetch('https://jsonplaceholder.typicode.com/users')
    this.lista_usuarios=await datos_recibidos.json()
  }
}
