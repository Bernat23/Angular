export interface ICarta {
    num: number;
    img: string;
    visible: boolean;
    filaGirada: boolean;
    correcte: boolean;

    girar():void;
}