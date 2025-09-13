import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtista } from '../interfaces/IArtista';

@Component({
  selector: 'app-artistas',
  imports: [],
  templateUrl: './artistas.html',
  styleUrl: './artistas.scss'
})
export class Artistas implements OnInit {
  idArtista: number = 0

  //Inyeccion de dependecia
  constructor(private ruta: ActivatedRoute){}

  ngOnInit(): void {
    console.log("Inicializando el componente")
    this.ruta.queryParams.subscribe(params =>{
      console.log(params)
      if(params['id'] == undefined){
        this.artistasFiltrados = this.artistas
      }else{
        this.idArtista = Number(params['id'])
        this.artistasFiltrados = this.artistas.filter(artista => artista.id === this.idArtista)
      }
    })
  }

  artistas : IArtista[] = [
    {
      id: 1,
      nombre: 'Mark Hammil'
    },
    {
      id: 2,
      nombre: 'Carrie Fisher'
    }
  ]

  artistasFiltrados = this.artistas
}
