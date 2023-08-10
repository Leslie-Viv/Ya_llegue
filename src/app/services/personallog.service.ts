import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalLogService {
  currentUserData: any | null = null;
  private personalinfUrl = 'http://localhost:3000/api/escuela/:matricula';

  constructor(private http: HttpClient) {}
  
  setCurrentUserData(data: any) {
    this.currentUserData = data;
  }

  getCurrentUserData(): any | null {
    return this.currentUserData;
  }

  getPersonalInfo(matricula: string): Observable<any> {
    const url = this.personalinfUrl.replace(':matricula', matricula);
    return this.http.get<any>(url);
  }
}
