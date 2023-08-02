import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalLogService {
  private personalinfUrl = 'http://localhost:3000/api/escuela/matricula';

  constructor(private http: HttpClient) {}

  getPersonalInfo(): Observable<any> {
    return this.http.get<any>(this.personalinfUrl);
  }
}
