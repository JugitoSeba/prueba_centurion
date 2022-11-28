import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhaskara',
  templateUrl: './bhaskara.component.html',
  styleUrls: ['./bhaskara.component.css']
})
export class BhaskaraComponent implements OnInit {
  numero1:number=0
  numero2:number=0
  numero3:number=0
  resultado1:number=0
  resultado2:number=0

  constructor() { }

  ngOnInit(): void {
  }

  async calcular_bhaskara(){
    const paso1=Math.pow(this.numero1,2)-(4*this.numero1*this.numero3)
    const paso2=Math.sqrt(paso1)
    this.resultado1=(-this.numero2+paso2)/(2*this.numero1)
    this.resultado2=(-this.numero2-paso2)/(2*this.numero1)
    alert("El primer resultado es "+this.resultado1+"    El segundo es "+this.resultado2)
  }
}
