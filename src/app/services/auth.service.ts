import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/escuela/login';


  constructor( private http: HttpClient) { }

  login(matricula: string, password: string): Observable<any> {
    const body = {matricula: matricula, password: password };
    return this.http.post(this.loginUrl, body);
  }
}
