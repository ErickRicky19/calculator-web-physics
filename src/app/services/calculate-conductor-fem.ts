import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateConductorFemService {

  constructor() { }

  calculateConductorFem(camp: number, long: number, v: number): number{
    return (camp * long * v);
  }
}
