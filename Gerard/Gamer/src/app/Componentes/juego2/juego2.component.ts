import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {

  id : number = 0;
  titulo : string = '';
  compania : string = '';
  valoracion : number = 0;

  constructor(route : ActivatedRoute) { 
    this.id = route.snapshot.params["id"]
    this.titulo = route.snapshot.params["titulo"]
    this.compania = route.snapshot.params["compania"]
    this.valoracion = route.snapshot.params["valoracion"]
  }

  ngOnInit(): void {
  }

}
