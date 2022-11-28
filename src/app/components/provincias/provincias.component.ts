import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from "../../services/provincia.service";
@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  lista_provincias:any=[]
  buscar:string=''
  pag:number=1

  constructor(private provinciaService:ProvinciaService) { }

  ngOnInit(): void {
    this.obtener_provincias()
  }

  obtener_provincias()
  {
    this.provinciaService.get_provincias().subscribe(
      data => this.lista_provincias=data,
      error => console.log(error)
    )
  }

}