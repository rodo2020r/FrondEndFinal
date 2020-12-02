import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LibroComponent } from './components/libros/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
