import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/escuela/login';
  private registerUrl = 'http://localhost:3000/api/escuela/register';
  private registerpadresUrl = 'http://localhost:3000/api/padres/registrarPadre';
  private registerAlumnosUrl = 'http://localhost:3000/api/hijos/registrarHijo';
  private currentUserMatricula: string | null = null;


  constructor(private http: HttpClient) { }

  loginPersonal(matricula: string, password: string): Observable<any> {
    const body = { matricula: matricula, password: password };
    return this.http.post(this.loginUrl, body);
  }

  loginPadres(matricula: string, password: string): Observable<any> {
    const body = { matricula: matricula, password: password };
    return this.http.post(this.loginUrl, body);
  }

  register(nombre: string, apellidos: string, puesto: string, matricula: string, password: string, foto: string): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, puesto: puesto, matricula: matricula, password: password, foto: foto };
    return this.http.post(this.registerUrl, body);
  }

  registerpadres(nombre: string, apellidos: string, username: string, password: string, foto: string): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, username: username, password: password, foto: foto };
    return this.http.post(this.registerpadresUrl, body);
  }

  registerAlumnos(nombre: string, apellidos: string, grupo: string, matricula: string, foto: string, observaciones: string, padreID: number): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, grupo: grupo, matricula: matricula, foto: foto, observaciones: observaciones, padreID: padreID };
    return this.http.post(this.registerAlumnosUrl, body);
  }

  setCurrentUserMatricula(matricula: string) {
    this.currentUserMatricula = matricula;
  }

  getCurrentUserMatricula(): string | null {
    return this.currentUserMatricula;
  }

  isLoggedIn(): boolean {
    return !!this.currentUserMatricula;
  }
}
