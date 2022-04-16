import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }
  
  getProduct(): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/produit/findProduit`)
    .pipe(map(product => {
      localStorage.setItem('product', JSON.stringify(product));
      return product;
    }));
  }
  eliminateProduct(id: string): Observable<any>{
    return this.http.delete<Product>(`${this.apiUrl}/produit/deleteProduit/`+ id)
    .pipe(map(product => {
      localStorage.setItem('product', JSON.stringify(product));
      return product;
    }));
  }

  addProduct( product: Product): Observable<any>{
    return this.http.post<Product>(`${this.apiUrl}/produit/saveProduit`, product)
    .pipe(map(product => {
      localStorage.setItem('product', JSON.stringify(product));
      return product;
    }));
  }
  updateProduct(id: string): Observable<any>{
    return this.http.get<Product>(`${this.apiUrl}/produit/updateProduit/`+ id)
    .pipe(map(product => {
      localStorage.setItem('product', JSON.stringify(product));
      return product;
    }));
  }
}
