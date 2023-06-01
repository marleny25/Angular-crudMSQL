import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { EditarAlumnosComponent } from './editar-alumnos/editar-alumnos.component';

const routes: Routes = [
  {path:'usuarios',component:ListaAlumnosComponent},
  {path:'usuarios/editar/:id',component:EditarAlumnosComponent},
  {path:'usuarios/agregar',component:EditarAlumnosComponent},
  {path:'**',redirectTo: '/usuarios',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
