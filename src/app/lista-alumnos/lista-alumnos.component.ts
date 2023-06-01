import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from '../shared/alumno.model';
import { Observable } from 'rxjs';
import { AlumnoService } from '../shared/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit  {
  
  usuarios: Observable<AlumnoModel[]> | undefined;

  constructor(private usuarioService: AlumnoService) { }

  ngOnInit() {
      this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  borrarUsuario(id: string) {
    this.usuarioService.borrarUsuario(id).subscribe(data => {
      console.log(data);
    })
  }

}