import { Component } from '@angular/core';
import { AlumnoService } from '../shared/alumno.service';
import { AlumnoModel } from '../shared/alumno.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent {

  id = ''
  usuario = new AlumnoModel("","","","","");

  constructor(
    private usuarioService:AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuario = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.usuario.id_usuario) {
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/usuarios'])
      })
    } else {
      console.log('crear');
      this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/usuarios'])
      })
    }
  }
}