import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Joueur } from '../models/joueur';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:3000/api';
  constructor(private http :HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/user/signin`, user)
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }));;
      
  }
 
  inscritJoueur(joueur: Joueur, imgJ: File): Observable<Joueur> {
    const fd = new FormData();
    fd.append('name',joueur.name); 
    fd.append('lastname',joueur.lastname);
    fd.append('email',joueur.email)   
    fd.append('password',joueur.password);    
    fd.append('age',joueur.age);
    fd.append('telephone',joueur.telephone);
    fd.append('sexe',joueur.sexe);
    fd.append('avatar', imgJ, imgJ.name);
    fd.append('equipe', joueur.equipe);
    return this.http.post<Joueur>(`${this.apiUrl}/joueur/saveJoueur`,JSON.stringify(fd));  
      
  }

}
