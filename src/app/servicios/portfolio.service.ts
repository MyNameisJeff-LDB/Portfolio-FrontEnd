import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'https://api-portoflio-argentinaprograma.onrender.com'; // URL de tu API de Spring Boot

  constructor(private http:HttpClient) { }

  ///////////////////////////////OBTENER DATOS/////////////////////////

  obtenerDatos():Observable<any>{
    return this.http.get(`${this.apiUrl}/buscar/persona/1`);
  }

  obtenerExperiencia():Observable<any>{
    return this.http.get(`${this.apiUrl}/ver/experiencia`);
  }

  obtenerEducacion():Observable<any>{
    return this.http.get(`${this.apiUrl}/ver/educacion`);
  }

  obtenerProyectos():Observable<any>{
    return this.http.get(`${this.apiUrl}/ver/proyectos`);
  }

  obtenerSkills():Observable<any>{
    return this.http.get(`${this.apiUrl}/ver/skills`);
  }

  ////////////////////////////////BORRAR DATOS///////////////////////////

  
  borrarSkills(id:string) {
    return this.http.delete(`${this.apiUrl}/delete/skill/${id}`);
  }

  borrarEducacion(id:string) {
    return this.http.delete(`${this.apiUrl}/delete/educacion/${id}`);
  }

  borrarProyectos(id:string) {
    return this.http.delete(`${this.apiUrl}/delete/proyecto/${id}`);
  }

  borrarExperiencia(id:string) {
    return this.http.delete(`${this.apiUrl}/delete/experiencia/${id}`);
  }

  ///////////////////////////////MODIFICAR DATOS////////////////////////

  modifica_aboutMe(form:FormGroup) {
    return this.http.post(`${this.apiUrl}/new/persona`,form.value);
  }


  ///////////////////////////////AGREGAR DATOS//////////////////////////

  agregarSkill(form:FormGroup) {
       
    return this.http.post(`${this.apiUrl}/new/skill`,form.value);
  }

  agregarEducacion(form:FormGroup) {
       
    return this.http.post(`${this.apiUrl}/new/educacion`,form.value);
  }

  agregarExperiencia(form:FormGroup) {
       
    return this.http.post(`${this.apiUrl}/new/experiencia`,form.value);
  }

  agregarProyecto(form:FormGroup) {
       
    return this.http.post(`${this.apiUrl}/new/proyecto`,form.value);
  }


}
