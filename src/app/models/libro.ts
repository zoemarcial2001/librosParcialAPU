export class Libro {
    id!:string;
    titulo!:string;
    img!:string;
    autores!:Array<string>;
    desc!:string;
    fechaP!:string;
    pag!:string;

    constructor(id:string, titulo:string, img:string, autores:Array<string>){  //, desc:string, fechaP:string, pag:string
        this.id = id;
        this.titulo = titulo;
        this.img = img;
        this.autores = autores;
        /*
        this.desc = desc;
        this.fechaP = fechaP;
        this.pag = pag;
        */
    }
}
