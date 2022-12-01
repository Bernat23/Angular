import { Injectable } from '@angular/core';
import { Memori } from '../../Entitats/Implementacions/Memori/Memori';

@Injectable({
  providedIn: 'root'
})
export class MemoriService {
  memori: Memori = new Memori();

  constructor() { }

  getMemori(): Memori{
    return this.memori;
  }
}
