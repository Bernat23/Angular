import { Component, Input, OnInit } from '@angular/core';
import { Baralla } from 'src/app/projecte/Model/Entitats/Implementacions/Baralla/Baralla';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  @Input() baralla !: Baralla;

  constructor() { }

  ngOnInit(): void {
  }

  public getBaralla(): Baralla {
    return this.baralla;
  }

  public bloquejar(baralla:Baralla):void {
    baralla.girada = true;
    for(let i = 0; i < baralla.cartes.length; i++) {
      baralla.cartes[i].filaGirada = true;
    }
  }

}
