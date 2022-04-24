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
    return this.http.get<Product>(`${this.apiUrl}/produit/findProduit`);
  }
  eliminateProduct(id: string): Observable<any>{
    return this.http.delete<Product>(`${this.apiUrl}/produit/deleteProduit/`+ id);
  }

  addProduct(newProd:any, imgProd: File): Observable<any> {
    const fd = new FormData();
    
    fd.append('name', newProd.name); 
    fd.append('marque', newProd.marque);
    fd.append('description', newProd.description)  ;   
    fd.append('prix', newProd.prix);
    fd.append('image', imgProd, imgProd.name);
  
    return this.http.post<Product>(`${this.apiUrl}/produit/saveProduit`, fd);
  }
  obtenerProduct(id:String): Observable<any>{
    return this.http.get<Product>(`${this.apiUrl}/produit/getProduit/`+ id);
  }

  updateProduct(id: string, product:Product): Observable<any>{
    return this.http.put<Product>(`${this.apiUrl}/produit/updateProduit/`+ id, product);
  }
}
