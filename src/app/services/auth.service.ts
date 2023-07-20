import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/escuela/login';

  private registerUrl = 'http://localhost:3000/api/escuela/register';


  constructor( private http: HttpClient) { }

  login(matricula: string, password: string): Observable<any> {
    const body = {matricula: matricula, password: password };
    return this.http.post(this.loginUrl, body);
  }

  register(nombre: string, apellidos: string, puesto: string,matricula: string, password: string, foto: string): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, puesto: puesto, matricula: matricula, password: password, foto: foto };
    return this.http.post(this.registerUrl, body);
  }


}
