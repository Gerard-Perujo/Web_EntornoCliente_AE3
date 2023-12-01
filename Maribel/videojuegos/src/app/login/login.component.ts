//Se tienen que importar el Router y el usuario para poder obtener información de ellos.
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
Ahí mismo también se crea una lista de usuarios con sus nombres de usuario y respectivas contraseñas,
para que se puedan consultar en cualquier momento.
Luego necesitamos el mapa de la web que nos ayude a movernos de una página a otra: router.

Posteriormente, se deben realizar dos métodos.
El primero de ellos verifica la existencia del usuario. Recorre con un for toda la lista de usuarios.
Si el nombre y la contraseñan que introduzcan es igual a usuario creado con el mismo nombre y contraseña,
entonces devuelve true. Si no hay ningún usuario con los mismos valores de parámetros devuelve false.

Finalmente, el método loguearse, en función del resultado que aporte el método verificar, 
nos redirige al index, logrando iniciar sesión, y se guardan datos en un objeto que llamamos usuario
que tiene el nombre del user para intercambiar datos entre páginas; 
pero si devolvió false entonces salta el mensaje de error y permanecemos en la página

Se necesitan los this para apuntar a objetos específicos de la instancia de esta clase.
*/
export class LoginComponent implements OnInit {
  user: string = "";
  contrasena: string = "";
  mensaje : string = "";
  usuariosExistentes: Usuario[] = [
    new Usuario('Bowser', 'Peaches'),
    new Usuario('Mario', 'its a me'),
    new Usuario('Pikachu', 'te elijo a ti'),
    new Usuario('Tiny', 'kong'),
    new Usuario('Game', 'over')
  ];

  constructor(private ruta: Router) {

  }

  public verificar (user: string, contrasena : string): boolean{
    for (let usuario of this.usuariosExistentes){
      if (usuario.user === user && usuario.contrasena ===contrasena){
        return true;
      } 
    }
    return false;
  }

  public loguearse(): void{
    if (this.verificar(this.user, this.contrasena)) {
      this.ruta.navigate(['/index', {usuario:this.user}]);
    } else {
      this.mensaje = "¡Vaya! Parece que el nombre estrella o la clave mágica no son los correctos.¡Anímate, aventurero del Mundo de los Sueños, e inténtalo de nuevo!";
    }
  }

  ngOnInit(): void {
  }

}
