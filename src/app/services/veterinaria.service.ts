import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAnimal } from "../models/animal";

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {

  constructor(private http:HttpClient) { }

  save_animales(unAnimal:IAnimal)
  {return this.http.post('http://localhost:3000/veterinaria',unAnimal)}

  get_animales()
  {return this.http.get("http://localhost:3000/veterinaria")}

  delete_animales(id:number)
  {return this.http.delete("http://localhost:3000/veterinaria/"+id)}
  
  update_animales(unAnimal:IAnimal){
    let id=unAnimal.id
    return this.http.put('http://localhost:3000/veterinaria/'+id,unAnimal)
  }
}