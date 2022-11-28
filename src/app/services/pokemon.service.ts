import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPokemon } from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  save_pokemon(unPokemon:IPokemon)
  {return this.http.post('http://localhost:3000/pokemon',unPokemon)}

  get_pokemon()
  {return this.http.get("http://localhost:3000/pokemon")}

  delete_pokemon(id:number)
  {return this.http.delete("http://localhost:3000/pokemon/"+id)}
  
  update_pokemon(unPokemon:IPokemon){
    let id=unPokemon.id
    return this.http.put('http://localhost:3000/pokemon/'+id,unPokemon)
  }
}