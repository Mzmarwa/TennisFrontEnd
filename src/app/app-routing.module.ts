import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscritComponent } from './components/inscrit/inscrit.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'inscrit', component:InscritComponent},
  {path:'home', component:HomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
