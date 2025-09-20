import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListadoPokemon } from './interfaces/IListadoPokemon';


@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  private urlBase = 'https://pokeapi.co/api/v2/'
  //httpclient permite la comunicacion con servicios http

  constructor(private cliente: HttpClient){}

  //Trae todos los pokemon en listado, por defecto trae los primeros 20
  getPokemons(limite: number = 20): Observable<IListadoPokemon>{
    const resultado = this.cliente.get<IListadoPokemon>(`${this.urlBase}pokemon?limit=${limite}`)
    return resultado
  }

  //Trae los detalles de un solo pokemon
  getPokemon(url: string){
    //Por hacer: Obtener los resultados de este pokemon
  }
}
