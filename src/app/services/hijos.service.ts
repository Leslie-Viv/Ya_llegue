import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HijosService {
  private hijoUrl = 'http://localhost:3000/api/hijos';
  private registerAlumnosUrl = 'http://localhost:3000/api/hijos/registrarHijo';

  
  hijos:any=[]
  constructor(private http: HttpClient) { }

  gethijos(): Observable<any>{
    return this.http.get<any>(this.hijoUrl)
  }

  registerAlumnos(nombre: string, apellidos: string, grupo: string, matricula: string, foto: string, observaciones: string, padreID: number): Observable<any> {
    const body = { nombre: nombre, apellidos: apellidos, grupo: grupo, matricula: matricula, foto: foto, observaciones: observaciones, padreID: padreID };
    return this.http.post(this.registerAlumnosUrl, body);
  }

  gethijo(id:any):Observable<any>{
    const url = `${this.hijoUrl}/${id}`;
    return this.http.get(url)
  }

  eliminarHijo(id:any){
    const url = `${this.hijoUrl}/${id}`
    return this.http.delete(url)
  }

  actualizarHijo(id:number, nombre: string, apellidos: string, grupo: string, matricula: string, foto: string, observaciones: string, padreID: number){
    const body = {id:id, nombre: nombre, apellidos: apellidos, grupo: grupo, matricula: matricula, foto: foto, observaciones: observaciones, padreID: padreID };
    const url = `${this.hijoUrl}/${id}`
    return this.http.patch(url, body)
  }
}
