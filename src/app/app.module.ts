import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { BhaskaraComponent } from './components/bhaskara/bhaskara.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { ProductoComponent } from './components/producto/producto.component';
import { HttpClientModule } from "@angular/common/http";
import { AnimeComponent } from './components/anime/anime.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { VeterinariaComponent } from './components/veterinaria/veterinaria.component';
import { ServidorComponent } from './components/servidor/servidor.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { GridPokemonComponent } from './components/grid-pokemon/grid-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClienteComponent,
    UsuarioComponent,
    ProvinciasComponent,
    BhaskaraComponent,
    ProductoComponent,
    AnimeComponent,
    AlumnoComponent,
    VeterinariaComponent,
    ServidorComponent,
    PokemonComponent,
    GridPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
