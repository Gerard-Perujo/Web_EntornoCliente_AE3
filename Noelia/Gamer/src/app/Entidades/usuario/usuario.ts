    
export class Usuario{
  

    public constructor(public nombre:string, public pas:string){
        this.nombre = nombre,
        this.pas = pas
    }


    public toString(): string{
        return `Nombre ${this.nombre}, Password ${this.pas}`
    }
}