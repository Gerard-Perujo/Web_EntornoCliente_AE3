import { Injectable } from "@angular/core";
import { Usuario } from "../Entidades/usuario/usuario";

@Injectable({
    providedIn: 'root',
})

export class Autorizacion{

    private listaUsuarios : Usuario[] = [ 
        {nombre: 'Jose', pas: '1111'}
    ]

    public comprobar (nombre : string, pas: string): boolean{
        return this.listaUsuarios.some((usuario) => usuario.nombre === nombre && usuario.pas === pas);
      }
        

}