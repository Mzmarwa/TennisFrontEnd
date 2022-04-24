import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//component
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddcoashComponent } from './addcoash/addcoash.component';
import { CoashComponent } from './coash/coash.component';
import { ListcontactComponent } from './listcontact/listcontact.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    AddcoashComponent,
    CoashComponent,
    ListcontactComponent,
    
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    
    

  ]
})
export class DashboardModule { }
