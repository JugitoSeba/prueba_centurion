import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PokemonService } from "../../services/pokemon.service";
import { IPokemon } from "../../models/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  formPokemon:FormGroup
  lista_pokemon:any=[]
  class_btn:string='btn btn-success'
  text_btn:string='Guardar'

  reset_display:string='display:none'

  constructor(private fb:FormBuilder,private pokemonService:PokemonService) {
    this.formPokemon=this.fb.group({
      id:[null],
      nombre:[''],
      peso:[''],
      altura:[''],
      habilidad:[''],
      tipo:[''],
      imagen:['']
    })
  }

  ngOnInit(): void {this.obtener_pokemon()}

  guardar_pokemon(){
    if(this.formPokemon.value.id){
      this.actualizar_pokemon()
      this.class_btn='btn btn-success'
      this.text_btn='Guardar'
    }else{

      this.pokemonService.save_pokemon(this.formPokemon.value).subscribe(
        respuesta =>{
          console.log(respuesta)
          this.formPokemon.reset()
          this.obtener_pokemon()
        },error => console.log
      )  
    } 
  }

obtener_pokemon(){
  this.pokemonService.get_pokemon().subscribe(
    respuesta => {this.lista_pokemon=respuesta},error => console.log(error))
}

eliminar_pokemon(id:number){
  this.pokemonService.delete_pokemon(id).subscribe(
    respuesta =>{console.log(respuesta)
    this.obtener_pokemon()
    },
    error => console.log(error))
}

editar_pokemon(unPokemon:IPokemon){
  this.formPokemon.setValue({
    id:unPokemon.id,
    nombre:unPokemon.nombre,
    peso:unPokemon.peso,
    altura:unPokemon.altura,
    habilidad:unPokemon.habilidad,
    tipo:unPokemon.tipo,
    imagen:unPokemon.imagen
  })
  this.class_btn='btn btn-info'
  this.text_btn='Actualizar'
  this.reset_display='display:block'
}

actualizar_pokemon(){
  this.pokemonService.update_pokemon(this.formPokemon.value).subscribe(
    respuesta =>{
      console.log(respuesta)
      this.formPokemon.reset()
      this.obtener_pokemon()
   },
  error=> console.log(error)
  )
}

resetear(){
  this.formPokemon.reset()
  this.class_btn='btn btn-success'
  this.text_btn='Guardar'
  this.reset_display='display:none'
}
}
