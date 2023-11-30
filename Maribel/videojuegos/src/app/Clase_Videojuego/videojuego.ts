//Se define la clase en TS. Para que esta pueda ser accesible desde otros módulos se pone 'export'.
export class Videojuego{
    //Se declaran los atributos de la clase Videojuego, incluyendo su tipo.
    id: number;
    titulo: string;
    compañia: string;
    imagen: string;
    valoracion: number;

    //Se crea el constructor con todos los parámetros para que posteriormente se puedan crear nuevos objetos Videojuego con sus propios valores.
    constructor(id: number, titulo: string, compañia: string, valoracion: number, imagen: string){
        this.id = id;
        this.titulo = titulo;
        this.compañia = compañia;
        this.imagen = imagen;
        this.valoracion = valoracion;
    }

    //Se crea el toString por si en algún momento se desea obtener por consola o parecido la siguiente cadena:
    toString(): string{
        return `ID: ${this.id}, título: ${this.titulo}, compañía: ${this.compañia}, imagen: ${this.imagen}, valoración: ${this.valoracion}`;
    }
}