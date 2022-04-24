import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddcoashComponent } from './addcoash/addcoash.component';
import { CoashComponent } from './coash/coash.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{path:'products', component:ProductsComponent},
{path:'add-product', component:AddProductComponent},
{path:'addcoash', component:AddcoashComponent},
{path:'coashs', component:CoashComponent},
{path:'update-product/:id', component:AddProductComponent},
{path:'update-coash/:id', component:AddcoashComponent},
{path:'listcontact', component:ListcontactComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
