import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clase_Usuario/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*
Se van a inicializar los atributos que serán necesarios para ejecutar correctamente el login.
A continuacuón se crea una lista de usuarios con sus nombres de usuario y respectivas contraseñas.
Luego necesitamos el mapa de la web que nos ayude a movernos de una página a otra: router.

Posteriormente, se deben realizar dos métodos.
El primero de ellos
*/
export class LoginComponent implements OnInit {
  user: string = "";
  contrasena: string = "";
  mensaje : string = "";

  let usuariosExistentes: Usuario[] = [
    new Usuario('Bowser', 'Peaches'),
    new Usuario('Mario', 'Luigi')]

  constructor(private ruta: Router) {

  }

  public verificar 


  ngOnInit(): void {
  }

}
