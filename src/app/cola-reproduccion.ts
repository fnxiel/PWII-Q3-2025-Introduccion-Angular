import { Injectable } from '@angular/core';
import { IPelicula } from './interfaces/IPelicula';
import { IPeliculaResumen } from './interfaces/IPeliculaResumen';

@Injectable({
  providedIn: 'root'
})
export class ColaReproduccion {
  colaReproduccion : IPelicula[] = []

  agregarPelicula(pelicula: IPelicula){
    console.log("Agregando la pelicula", pelicula.titulo, "a la cola de reproduccion")
    this.colaReproduccion.push(pelicula)
  }

  listarColaReproduccion(): IPeliculaResumen[]{
    console.log("Listando la cola de reproducccion")
    const listadoPeliculas = this.colaReproduccion.map<IPeliculaResumen>((pelicula, i) =>
       {
        return {
          no: i+1,
          titulo: pelicula.titulo.texto
        }
       }
    )
    console.log(listadoPeliculas)
    return listadoPeliculas
  }
}
