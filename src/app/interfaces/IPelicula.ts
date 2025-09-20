import { IEnlace } from "./IEnlace"
import { IImagen } from "./IImagen"

export interface IPelicula{
    imagen: IImagen
    titulo: IEnlace
    Anual: number
    Duracion: string
    Clasificacion: "Todo publico" | "Mayores"| "Con supervision adulta"
    Puntaje: number
}

