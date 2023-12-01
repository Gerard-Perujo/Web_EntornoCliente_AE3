import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videogame9',
  templateUrl: './videogame9.component.html',
  styleUrls: ['./videogame9.component.css']
})
export class Videogame9Component implements OnInit {
  id: number = 0;
  titulo: string = "";
  compania: string = "";
  valoracion: number = 0;


  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params["id"];
    this.titulo = route.snapshot.params["titulo"];
    this.compania = route.snapshot.params["compania"];
    this.valoracion = route.snapshot.params["valoracion"];
  }
  ngOnInit(): void {
  }

}