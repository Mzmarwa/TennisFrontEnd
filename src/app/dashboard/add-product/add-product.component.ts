import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  //productForm: FormGroup;
  cardtitle = 'Add a new Product';
  id: string | null;
  image!:any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute) {
    
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  productForm: Product = {
    _id: '',
    name: '',
    marque: '',
    description: '',
    prix: '',        
    image: ''
  };

  ngOnInit(): void {
    //this.isEdit();
  }

  loadImage(img: any) {
    this.image = img.target.files[0];
    console.log(this.image);
  }

  addProduct() {
    this._productService.addProduct(this.productForm, this.image).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          alert('Product saved successfully!');
        } else {
          console.log(data);
          alert('Error');
          //this.listProduct();
        }
      },
      (err) => {
        console.log(err);        
      }
    );
  }

 


  /*isEdit() {
    if (this.id !== null) {
      this.cardtitle = 'Update a product';
      this._productService.obtenerProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          name: data.name,
          marque: data.marque,
          prix: data.prix,
          description: data.description,
          image: data.image,
          

        })
      })
    }
  }*/

}