import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { }

  get_provincias(){
    return this.http.get('https://apis.datos.gob.ar/georef/api/provincias')
  }

}
