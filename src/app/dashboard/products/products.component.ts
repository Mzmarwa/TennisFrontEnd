import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProduct: Product[] = [];

  constructor(private _productService: ProductService ) { }

  ngOnInit(): void {
    this.obtenerProducts();
  }

  obtenerProducts(){
    this._productService.getProduit().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error =>{
      console.log(error);
    })
  }

}
