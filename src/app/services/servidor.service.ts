import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IServidor } from "../models/servidor";

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http:HttpClient) { }

  save_servers(unServidor:IServidor)
  {return this.http.post('http://localhost:3000/servidor',unServidor)}

  get_servers()
  {return this.http.get("http://localhost:3000/servidor")}

  delete_servers(id:number)
  {return this.http.delete("http://localhost:3000/servidor/"+id)}
  
  update_servers(unServidor:IServidor){
    let id=unServidor.id
    return this.http.put('http://localhost:3000/servidor/'+id,unServidor)
  }
}