import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/escuela/login';
  private loginPadresUrl = 'http://localhost:3000/api/padres/login'
  private registerUrl = 'http://localhost:3000/api/escuela/register';
  private registerpadresUrl = 'http://localhost:3000/api/padres/registro';
  private registerencargadosUrl = 'http://localhost:3000/api/encargados/nuevoEncargado';
  private currentUserMatricula: string | null = null;
  private currentUserID: string | null = null;
  private encargadosUrl = 'http://localhost:3000/api/encargados';


  constructor(private http: HttpClient) { }

  loginPersonal(matricula: string, password: string): Observable<any> {
    const body = { matricula: matricula, password: password };
    return this.http.post(this.loginUrl, body);
  }

  loginPadres(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http.post(this.loginPadresUrl, body);
  }

  register(nombre: string, apellidos: string, puesto: string, matricula: string, password: string, foto: string): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, puesto: puesto, matricula: matricula, password: password, foto: foto };
    return this.http.post(this.registerUrl, body);
  }
 
   registerpadres(nombre: string, apellidos: string, username: string, password: string, foto: string): Observable<any> {
    const body = {  nombre: nombre, apellidos: apellidos, username: username, password: password, foto: foto};
    return this.http.post(this.registerpadresUrl, body);
   }

  // registerpadres(nombre: string, apellidos: string, username: string, password: string, foto: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('nombre', nombre);
  //   formData.append('apellidos', apellidos);
  //   formData.append('username', username);
  //   formData.append('password', password);
  //   formData.append('foto', foto); // Agrega la imagen al formData
  
  //   return this.http.post(this.registerpadresUrl, formData);
  // }

  registerencargados(nombre: string, apellidos: string, foto: string, numero:number): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, foto: foto, numero: numero };
    return this.http.post(this.registerencargadosUrl, body);
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
