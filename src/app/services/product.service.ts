import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:3000/api/produit/findProduit';

  constructor(private http: HttpClient) { }
  getProduit(): Observable<any> {
    return this.http.get(this.url);
  }
}
