import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videogame2',
  templateUrl: './videogame2.component.html',
  styleUrls: ['./videogame2.component.css']
})
export class Videogame2Component implements OnInit {
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
