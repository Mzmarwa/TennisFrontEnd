import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  inscrit(user: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/user/signup`, user)
    
      
  }


}
