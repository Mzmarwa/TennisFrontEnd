import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private toastr: ToastrService ) { 
    this.productForm=this.fb.group({
      name:['',Validators.required],
      marque:['',Validators.required],
      description:['',Validators.required],
      prix:['',Validators.required],
      image:['',Validators.required],

    })
  }

  ngOnInit(): void {

  }
  addProduct(){
   
    const PRODUCT: Product = {
     name: this.productForm.get("name")?.value,
     marque: this.productForm.get("marque")?.value,
     description: this.productForm.get("description")?.value,
     prix: this.productForm.get("prix")?.value,
     image: this.productForm.get("image")?.value,

    }

    console.log(PRODUCT);
    this.router.navigate(["/products"]);
    this.toastr.success('The product was successfully registered!', 'Registered product !!');

  }

}
