import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/Entidades/videojuego/videojuego';

@Component({
  selector: 'app-mi-usuario',
  templateUrl: './mi-usuario.component.html',
  styleUrls: ['./mi-usuario.component.css']
})
export class MiUsuarioComponent implements OnInit {

  id : number = 0;
  titulo : string = "";
  valoracion : number = 0;
  compañia : string = "";

  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null

  constructor() { 
    let videojuego : Videojuego = new Videojuego(1,"Elden Ring", "FromSoftware", 10)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(2,"The Elder ScrollsV: Skyrim", "Bethesda Softworks", 9.8)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(3,"Sekiro: Shadows Die Twice", "FromSoftware", 9.5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(4,"God of War: Ragnarok", "Santa Monica Studio", 9.8)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(5,"The Witcher 3: Wild Hunt", "CD Projeckt RED", 9.5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(6,"Fallout 3", "Bethesda Softworks", 9.5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego(7,"Dark Souls III", "From Software", 9.5)
    this.listaVideojuegos.push(videojuego)

  }

  ngOnInit(): void {
  }

}
