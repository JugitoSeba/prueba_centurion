import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAlumno } from "../models/alumno";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }

  save_alumno(unAlumno:IAlumno)
  {return this.http.post('http://localhost:3000/alumnos',unAlumno)}

  get_alumnos()
  {return this.http.get("http://localhost:3000/alumnos")}

  delete_alumnos(id:number)
  {return this.http.delete("http://localhost:3000/alumnos/"+id)}
  
  update_alumnos(unAlumno:IAlumno){
    let id=unAlumno.id
    return this.http.put('http://localhost:3000/alumnos/'+id,unAlumno)
  }
}