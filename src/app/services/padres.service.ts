import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PadresService {
  currentUserData: any | null = null;
  private URL = 'http://localhost:3000/api/padres';

  constructor(private http:HttpClient) { }

  getpadre(id:any):Observable<any>{
    const url = `${this.URL}/${id}`
    return this.http.get(url)
  }
  
  gethijos(id:any):Observable<any>{
    const url = `${this.URL}/${id}/hijos`
    return this.http.get(url)
  }  
}
