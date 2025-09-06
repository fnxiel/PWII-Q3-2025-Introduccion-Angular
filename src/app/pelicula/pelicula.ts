import { Component, Input } from '@angular/core';
import { IPelicula } from '../interfaces/IPelicula';
import { IEnlace } from '../interfaces/IEnlace';
import { IImagen } from '../interfaces/IImagen';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.scss'
})
export class Pelicula implements IPelicula {
  @Input() imagen: IImagen = {
    src: 'https://picsum.photos/200/150',
    alt: 'Portada'
  };
  @Input() titulo: IEnlace = {
    texto: 'Sin titulo',
    href: 'https://www.imdb.com/'
  };
  @Input() Anual: number = 0;
  @Input() Duracion: string = '0m';
  @Input() Clasificacion: 'Con supervision adulta' | 'Todo publico' | 'Mayores' = 'Todo publico';
  @Input() Puntaje: number = 0;
  
}