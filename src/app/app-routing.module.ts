import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InscritComponent } from './components/inscrit/inscrit.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { CoashComponent } from './components/coash/coash.component';
import { GameComponent } from './components/game/game.component';



const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'inscrit', component:InscritComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'shop', component:ShopComponent},
  {path:'coash', component:CoashComponent},
  {path:'game', component:GameComponent},
  

  {path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
