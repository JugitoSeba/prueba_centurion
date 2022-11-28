import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-grid-pokemon',
  templateUrl: './grid-pokemon.component.html',
  styleUrls: ['./grid-pokemon.component.css']
})
export class GridPokemonComponent implements OnInit {

  lista_pokemon:any=[]

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {this.obtener_pokemon()}

  obtener_pokemon(){
    this.pokemonService.get_pokemon().subscribe(
      respuesta => {this.lista_pokemon=respuesta},error => console.log(error))
  }

}
