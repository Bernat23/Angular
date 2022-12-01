import { IBaralla } from "../Baralla/IBaralla";
import { ICarta } from "../Carta/ICarta";

export interface IMemori<T extends IBaralla<ICarta>> {
    baralles: Array<T>;
    timer: number;
    comptadorGirades: number;
    errors :number;


    compteEnrere(): void;
    girarTotesCartes(): void;
    generar():void 

}