import { IMATGESCARTES } from "src/app/projecte/utils/ImatgesCartes";
import { IBaralla } from "../../Interfaces/Baralla/IBaralla";
import { Carta } from "../Carta/Carta";

export class Baralla implements IBaralla<Carta> {
    cartes: Array<Carta> = new Array<Carta>();
    girada: boolean;

    constructor() {
        this.generar();
        this.girada =  false;
    }



    generar(): void {
        for(let i = 0; i < 4; i++){
            this.cartes.push(new Carta(i, IMATGESCARTES[i].imatge));
        }
    }

    barrejar(arr:Array<Carta>): Array<Carta> {
        var len = arr.length;
        var d = len;
        var array = [];
        var k, i;
        for (i = 0; i < d; i++) {
            k = Math.floor(Math.random() * len);
            array.push(arr[k]);
            arr.splice(k, 1);
            len = arr.length;
        }
        for (i = 0; i < d; i++) {
            arr[i] = array[i];
        }
        return arr;
    }
}