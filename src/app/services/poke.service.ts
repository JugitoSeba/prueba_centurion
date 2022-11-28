import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http:HttpClient) { }

  get_anime(){
    return this.http.get('https://api.jikan.moe/v4/anime?q=pokemon&sfw')
  }

}
