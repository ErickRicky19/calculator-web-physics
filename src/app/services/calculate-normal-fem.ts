import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateNormalFemService {

  constructor() { }
  calculateNormalFem(campI: number, campF: number, t: number) : number{
    return -(campF - campI / t);
  }
}
