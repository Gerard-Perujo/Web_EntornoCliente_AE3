import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = ""
  pas: string = ""
  mensaje: string = ""

  private listaUsuarios : Usuario[] = [ 
    {nombre: 'Jose', pas: '1111'},
    {nombre: 'Jorge', pas: '2222'},
    {nombre: 'Anna', pas: '3333'},
    {nombre: 'Julia', pas: '4444'}
]

  constructor( private ruta: Router) { 

  }

public acceder(): void{
  if (this.comprobar(this.nombre, this.pas)){
    this.ruta.navigate(['/usuario', {nombre: this.nombre}])
  }else{
    this.mensaje = "Usuario y contraseña Incorrectas"
  }
}


public comprobar (nombre : string, pas: string): boolean{
  return this.listaUsuarios.some((usuario) => usuario.nombre === nombre && usuario.pas === pas);
}
 
  ngOnInit(): void {
  }
}
