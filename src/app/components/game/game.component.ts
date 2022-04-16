import { Component, OnInit } from '@angular/core';

  
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 myScriptElement: HTMLScriptElement;
  constructor() {
    
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src="src/assets/game/js/script.js";
    document.body.appendChild(this.myScriptElement);

   }

  ngOnInit(): void {
  }

}
