import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Equipe } from '../models/equipe';
import { Joueur } from '../models/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http :HttpClient) { }

  apiUrl: string = 'http://localhost:3000/api';

  getEquipe() : Observable<any> {
    return this.http.get<Equipe[]>(`${this.apiUrl}/equipe/getEquipes`);

  }
  addJoueur( joueur: Joueur): Observable<any>{
    return this.http.post<Joueur>(`${this.apiUrl}/joueur/saveJoueur`, joueur)
    .pipe(map(joueur => {
      localStorage.setItem('joueur', JSON.stringify(joueur));
      return joueur;
    }));
  }
  
}
