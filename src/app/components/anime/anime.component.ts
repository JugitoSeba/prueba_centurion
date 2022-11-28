import { Component, OnInit } from '@angular/core';
import { PokeService } from "../../services/poke.service";

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  lista_anime:any=[]

  constructor(private pokeService:PokeService) { }

  ngOnInit(): void {
    this.obtener_anime()
  }

  obtener_anime(){
      this.pokeService.get_anime().subscribe(
      data => this.lista_anime=data,
      error => console.log(error)
    )
  }

}
