import { ICarta } from "../../Interfaces/Carta/ICarta";

export class Carta implements ICarta {
    num: number;
    img: string;
    visible: boolean;
    filaGirada: boolean;
    correcte: boolean;

    constructor(num: number, img: string) {
        this.img =  img;
        this.num = num;
        this.visible = true;
        this.filaGirada = false;
        this.correcte = true;
    }

    girar(): void{
        this.visible = !this.visible;
    }

}