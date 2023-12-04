import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/Entidades/videojuego/videojuego';
import { ActivatedRoute } from '@angular/router';

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
  nombre : string = ""

  public listaVideojuegos : Videojuego[] = [
    {id:1, titulo:"Elden Ring", compania:"FromSoftware", valoracion:10},
    {id:2, titulo:"The Elder ScrollsV: Skyrim", compania:"Bethesda Softworks", valoracion:9.8},
    {id:3, titulo:"Sekiro: Shadows Die Twice", compania:"FromSoftware", valoracion:9.5},
    {id:4, titulo:"God of War: Ragnarok", compania:"Santa Monica Studio", valoracion:9.8},
    {id:5, titulo:"The Witcher 3: Wild Hunt", compania:"CD Projeckt RED", valoracion:9.5},
    {id:6, titulo:"Fallout 3", compania:"Bethesda Softworks", valoracion:9.5},
    {id:7, titulo:"Dark Souls III", compania:"From Software", valoracion:9.5}


  ]
 

   
  constructor(private ruta : ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.nombre = this.ruta.snapshot.paramMap.get('nombre') || '';
  }

}
