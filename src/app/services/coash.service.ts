import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Coash } from '../models/coash';

@Injectable({
  providedIn: 'root'
})
export class CoashService {
  apiUrl='http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }
  
  getCoash(): Observable<any> {
    return this.http.get<Coash>(`${this.apiUrl}/entreneur/findEntreneurs`)
    .pipe(map(coash => {
      localStorage.setItem('coash', JSON.stringify(coash));
      return coash;
    }));
  }
  eliminateCoash(id: string): Observable<any>{
    return this.http.delete<Coash>(`${this.apiUrl}/entreneur/deleteEntreneurs/`+ id)
    .pipe(map(coash => {
      localStorage.setItem('coash', JSON.stringify(coash));
      return coash;
    }));
  }
  addCoash( coash: Coash): Observable<any>{
    return this.http.post<Coash>(`${this.apiUrl}/entreneur/saveEntreneur`, coash)
    .pipe(map(coash => {
      localStorage.setItem('coash', JSON.stringify(coash));
      return coash;
    }));
  }
  
  obtenerCoash(id:String): Observable<any>{
    return this.http.get<Coash>(`${this.apiUrl}/entreneur/getEntreneurs/`+ id)
    .pipe(map(coash => {
      localStorage.setItem('coash', JSON.stringify(coash));
      return coash;
    }));
  }
  updateCoash(id: string, coash:Coash): Observable<any>{
    return this.http.put<Coash>(`${this.apiUrl}/entreneur/updateEntreneurs/`+ id, coash)
    .pipe(map(coash => {
      localStorage.setItem('coash', JSON.stringify(coash));
      return coash;
    }));
  }
  
}
