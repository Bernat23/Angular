import { Component, OnInit } from '@angular/core';
import { Baralla } from 'src/app/projecte/Model/Entitats/Implementacions/Baralla/Baralla';
import { Memori } from 'src/app/projecte/Model/Entitats/Implementacions/Memori/Memori';
import { MemoriService } from 'src/app/projecte/Model/Services/memori/memori.service';

@Component({
  selector: 'app-memori',
  templateUrl: './memori.component.html',
  styleUrls: ['./memori.component.css']
})
export class MemoriComponent implements OnInit {
  memori !: Memori;

  constructor(private memoriService: MemoriService) { }


  ngOnInit(): void {
  }

  public getMemori(): Memori{
    return this.memoriService.getMemori();
  }


  comptarGirades(): void { //No sé si funcionarà el this.memoriService.getMemori();
    let comptador : number = 0;
    let memori = this.memoriService.getMemori();
    for(let i = 0; i < memori.baralles.length; i++){
      if(memori.baralles[i].girada){
        comptador++;
      }
      if(comptador == 4){
        this.comprovarIguals(memori);
      }
      else if(comptador > memori.comptadorGirades){
        memori.comptadorGirades = comptador;
      }
    }
  }

  comprovarIguals(memori: Memori) {
    let iguals : boolean = true;
    let cartaAnterior;
    cartaAnterior = this.mirarCarta(memori.baralles[0]);
    for(let i = 1; i < memori.baralles.length; i++){ 
      let cartaActual = this.mirarCarta(memori.baralles[i]);
      if(cartaActual != cartaAnterior){
        iguals = false;
      }
      cartaAnterior = cartaActual;
    }
    if(iguals){
      this.reiniciarJugada(false);
    } else{
      memori.errors++;
      this.tempsGirar();
    }
    
  }

  tempsGirar(){
    let conomotre : number = 2;
    let intervalId = setInterval(() => {
        conomotre = conomotre - 1;
        if(conomotre === 0){
            clearInterval(intervalId);
            this.reiniciarJugada(true);
        } 
    }, 1000)
}

  mirarCarta(baralla: Baralla): string {
    let img : string = '';
    for(let i = 0; i < baralla.cartes.length; ++i){
      if(!baralla.cartes[i].visible == false && !baralla.cartes[i].correcte){ // s'ha de canviar per false
        img = baralla.cartes[i].img;
      }
    }
    return img;
  }

  reiniciarJugada(amagar: boolean = true){
    let memori = this.memoriService.getMemori();
    for(let i = 0; i < memori.baralles.length; ++i){
      memori.baralles[i].girada = false;
      for(let j = 0; j < memori.baralles[i].cartes.length; j++){
        if(amagar && !memori.baralles[i].cartes[j].correcte){
          memori.baralles[i].cartes[j].visible = false; // TODO: canviar per false
        } else if(memori.baralles[i].cartes[j].visible && !amagar) {
          memori.baralles[i].cartes[j].correcte = true;
        } 
        memori.baralles[i].cartes[j].filaGirada = false;
      }
    }
    memori.comptadorGirades = 0;
  }

}
