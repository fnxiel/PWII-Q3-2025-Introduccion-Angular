import { Component } from '@angular/core';
import { IPelicula } from '../interfaces/IPelicula';
import { Pelicula } from '../pelicula/pelicula';

@Component({
  selector: 'app-peliculas',
  imports: [Pelicula],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.scss'
})
export class Peliculas {
  peliculas: IPelicula[] = [
    {
      imagen: {
        src: 'https://picsum.photos/id/10/200/150',
        alt: 'Portada'
      },
      titulo: {
        texto: 'After earth',
        href: 'https://www.imdb.com/'
      },
      Anual: 2013,
      Duracion: '1h 40m',
      Clasificacion: 'Con supervision adulta',
      Puntaje: 33
    },
    {
      imagen: {
        src: 'https://picsum.photos/id/20/200/150',
        alt: 'Portada segunda pelicula'
      },
      titulo: {
        texto: 'Baby mama',
        href: 'https://www.imdb.com/'
      },
      Anual: 2008,
      Duracion: '1h 39m',
      Clasificacion: 'Todo publico',
      Puntaje: 55
    },
    {
      imagen: {
        src: 'https://picsum.photos/id/30/200/150',
        alt: 'Portada tercera pelicula'
      },
      titulo: {
        texto: 'Star wars',
        href: 'https://www.imdb.com/'
      },
      Anual: 1980,
      Duracion: '3h 00m',
      Clasificacion: 'Todo publico',
      Puntaje: 99
    }
  ]
}
