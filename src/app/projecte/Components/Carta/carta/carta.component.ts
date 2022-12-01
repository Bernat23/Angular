import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/projecte/Model/Entitats/Implementacions/Carta/Carta';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: Carta;


  constructor() { }

  ngOnInit(): void {
  }

  agafar(carta:Carta){ 
    if(!carta.filaGirada && !carta.correcte){
      carta.girar();
    }
  }

}
