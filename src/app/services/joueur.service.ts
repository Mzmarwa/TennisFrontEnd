import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http :HttpClient) { }

  apiUrl: string = 'http://localhost:3000/api';

  getEquipe() : Observable<any> {
    return this.http.get<Equipe[]>(`${this.apiUrl}/equipe/getEquipes`);

  }
}
