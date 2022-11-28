import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from "./components/cliente/cliente.component";
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { BhaskaraComponent } from "./components/bhaskara/bhaskara.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { AnimeComponent } from "./components/anime/anime.component";
import { AlumnoComponent } from "../app/components/alumno/alumno.component";
import { VeterinariaComponent } from "../app/components/veterinaria/veterinaria.component";
import { ServidorComponent } from "../app/components/servidor/servidor.component";
import { PokemonComponent } from "../app/components/pokemon/pokemon.component";
import { GridPokemonComponent } from "../app/components/grid-pokemon/grid-pokemon.component"

const routes: Routes = [
    {
    path:'clientes',
    component:ClienteComponent
    },
    {
    path:'lista-usuario',
    component:UsuarioComponent
    },
    {
    path:'lista-provincia',
    component:ProvinciasComponent
    },
    {
    path:'bhaskara',
    component:BhaskaraComponent  
    },
    {
      path:'producto',
      component:ProductoComponent  
    },
    {
      path:'anime',
      component:AnimeComponent  
    },
    {
      path:'alumno',
      component:AlumnoComponent  
    },
    {
      path:'veterinaria',
      component:VeterinariaComponent  
    },
    {
      path:'servidor',
      component:ServidorComponent  
    },
    {
      path:'pokemon',
      component:PokemonComponent  
    },
    {
      path:'gridpokemon',
      component:GridPokemonComponent  
    }
];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
