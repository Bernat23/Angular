import { IMemori } from "../../Interfaces/Memori/IMemori";
import { Baralla } from "../Baralla/Baralla";

export class Memori implements IMemori<Baralla> {
    baralles: Array<Baralla> = new Array<Baralla>();
    timer: number;
    comptadorGirades: number;
    errors :number;


    constructor() {
        this.generar();
        this.timer = 1;
        this.comptadorGirades = 0;
        this.errors = 0;
        this.compteEnrere();
    }


    compteEnrere(): void{
        let intervalId = setInterval(() => {
            this.timer = this.timer - 1;
            if(this.timer === 0){
                clearInterval(intervalId)
                this.girarTotesCartes();
            } 
        }, 1000)
    }

    girarTotesCartes(): void {
        for(let i = 0; i < this.baralles.length; i++){
            for(let j = 0; j < this.baralles[i].cartes.length;j++){
                this.baralles[i].cartes[j].visible = false;
                this.baralles[i].cartes[j].correcte = false;
            }
        }
    }

    generar():void {  
        let comptador = 0;
        for(let i = 0; i < 4; i++){
            let fila = new Baralla();
            this.baralles.push(fila);
            for(let j = 0; j < 4; j++){
                this.baralles[i].cartes[j].num = comptador;
                comptador++;
            }
        }
    }



}