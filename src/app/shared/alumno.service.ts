import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnoModel } from 'src/app/shared/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
 BASE_URL ='http://localhost:3000'
 constructor(private http: HttpClient) { }

 obtenerUsuarios() {
   return this.http.get<AlumnoModel[]>(this.BASE_URL+'/usuarios');
 }

 obtenerUsuario(id: string) {
   return this.http.get<AlumnoModel[]>(`${this.BASE_URL}/usuarios/${id}`);
 }

 agregarUsuario(usuario: AlumnoModel) {
   return this.http.post<string>(`${this.BASE_URL}/usuarios/agregar`, usuario);
 }

 actualizarUsuario(usuario: AlumnoModel) {
   return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar/${usuario.id_usuario}`, usuario)
 }

 borrarUsuario(id: string) {
   return this.http.delete<string>(`${this.BASE_URL}/usuarios/borrar/${id}`)
 }
}