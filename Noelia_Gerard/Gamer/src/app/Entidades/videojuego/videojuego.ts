export class Videojuego{
  


    public constructor(public id: number, public titulo: string, public compania:string, public valoracion: number){
        this.id = id;
        this.titulo = titulo;
        this.compania = compania;
        this.valoracion = valoracion;
    }

    public toString(): string{
        return `ID ${this.id}, Titulo ${this.titulo}, Compañia ${this.compania}, Valoracion ${this.valoracion}`
    }
}