import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe';
import { Joueur } from 'src/app/models/joueur';
import { AuthService } from 'src/app/services/auth.service';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {

  public equipe!: Equipe;
  equipes: Equipe[]=[];
  submitted = false;
  registerForm: FormGroup;
 
  constructor(private sc:  JoueurService,
     public formBuilder: FormBuilder,
      private router: Router) {
    this.registerForm = this.formBuilder.group({
     
    name:['',Validators.required],
    lastname: ['',Validators.required],
    //avatar: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],    
    age: ['',Validators.required],
    telephone: ['',Validators.required],   
    sexe: ['',Validators.required], 
    equipe: this.equipe
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
   
   
      const JOUEUR: Joueur = {
       name: this.registerForm.get("name")?.value,
       lastname: this.registerForm.get("lastname")?.value,
       email: this.registerForm.get("email")?.value,
       password: this.registerForm.get("password")?.value,
       age: this.registerForm.get("age")?.value,
       telephone: this.registerForm.get("telephone")?.value,
       sexe: this.registerForm.get("sexe")?.value,
       equipe: this.registerForm.get("equipe")?.value,
  
      }
  
  console.log(JOUEUR);
      this.sc.addJoueur(JOUEUR).subscribe(data =>{
        this.router.navigate(["/home"]);
       
      }, error =>{
        console.log(error);
        this.registerForm.reset();
      }) 
    }
  }

