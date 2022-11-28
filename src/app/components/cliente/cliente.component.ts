import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  titulo:string='Probando Angular'
  nombre:any=['Pepe','Juan','Santiago']
  constructor() { }

  ngOnInit(): void {
  }

}
