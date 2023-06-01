import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { EditarAlumnosComponent } from './editar-alumnos/editar-alumnos.component';
import { AlumnoService } from './shared/alumno.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    EditarAlumnosComponent,
    NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
