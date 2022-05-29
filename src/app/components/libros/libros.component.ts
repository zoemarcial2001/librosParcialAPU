import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros!:Array<Libro>;
  libro!:Libro;

  constructor(private librosService:LibrosService) {
    this.libros = new Array<Libro>();
    this.libro = new Libro("", "", "", new Array<string>());
   }

  ngOnInit(): void {
  }

  buscarLibro(nombre:string){
    var name = nombre.replace(" ", "+");

    this.librosService.searchLibro(name).subscribe((lib) => {
      console.log(lib.length);
      for(var i=0; i < lib.length; i++){
        var libro = new Libro(lib[i].book_id, lib[i].name, lib[i].cover, lib[i].authors)
        this.libros.push(libro);
      }
    })
  }

  mostrarDetalle(id:string){
    for(var i=0; i < this.libros.length; i++){
      if(id === this.libros[i].id){
        this.libro = this.libros[i];
      }
    }

    this.librosService.searchId(id).subscribe((lib) =>{
      this.libro.desc = lib.synopsis;
      this.libro.fechaP = lib.published_date;
      this.libro.pag = lib.pages ;
      this.libro.img = lib.cover;
    });
  }

}
