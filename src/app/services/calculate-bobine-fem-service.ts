import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateBobineFemService {

  constructor() { }
   CalculateBobineFem( nBobine: number, campI: number, campF: number,t: number): number {
    return -nBobine * ((campF - campI) / t);
  }
}
