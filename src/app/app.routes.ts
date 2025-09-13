import { Routes } from '@angular/router';
import { Peliculas } from './peliculas/peliculas';
import { Artistas } from './artistas/artistas';

export const routes: Routes = [
    {
        path: '', component: Peliculas
    },
    {
        path: 'peliculas', component: Peliculas
    },
    {
        path: 'artistas', component: Artistas
    }
];
