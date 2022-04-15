import { Component, OnInit } from '@angular/core';
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
  avatar: any;
  equipes: Equipe[]=[];
  constructor(private auth: AuthService, private js: JoueurService) { }

  joueurForm: Joueur = {
    _id: '',
    name: '',
    lastname: '',
    avatar: '',
    email: '',
    password: '',    
    age: 0,
    telephone: '',   
    sexe: '', 
    equipe: this.equipe

  };

  loadImage(img: any) {
    this.avatar = img.target.files[0];
    console.log(this.avatar);
  }

  ngOnInit(): void {
    this.listEquipe()
  }

  addJoueur() {
    this.auth.inscritJoueur(this.joueurForm, this.avatar).subscribe(
      (data) => {
        if (!data) {
          alert('ERROR!!');
        } else {
          console.log(data);
          alert('Joueur saved successfully!');
          //this.listProduct();
        }
      },
      (err) => {
        console.log(err);        
      }
    );
  }

  listEquipe() {
    this.js.getEquipe().subscribe(
      (data) => {
     this.equipes  = data 
      console.log(data)
      }, (err) => {console.log(err)}
    )
  }

}
