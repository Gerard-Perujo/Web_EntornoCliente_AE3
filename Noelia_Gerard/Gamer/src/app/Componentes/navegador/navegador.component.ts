import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  
  nombre : string = ""

  constructor(private ruta : ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.nombre = this.ruta.snapshot.paramMap.get('nombre') || '';
  }

}
