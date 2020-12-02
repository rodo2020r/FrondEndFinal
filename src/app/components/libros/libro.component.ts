import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';

import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
  
})
export class LibroComponent implements OnInit {
  libros: any = [];
  libro = new Libro();
  constructor(public libroService: LibroService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.libroService.getLibros().subscribe(res => {
      this.libros = res[1]; 
      console.log(res)
    })
  }
  crear(form: NgForm) {
    if (this.libro._id) {
 
      this.libroService.putLibros(this.libro).subscribe(res=>{
        this.getLibros();
      });
      this.libro._id = "";
    }
    else
    {
    
    this.libroService.postLibros(this.libro).subscribe(res=>{
      this.getLibros();
    });
     }
    form.reset();
  
    
  }


  elimnar(libr: Libro) {
    this.libroService.deleteLibros(libr._id).subscribe(res=>{
      this.getLibros();
    });
  }

  editar(libr: Libro) {
    this.libro = libr;
  }
}