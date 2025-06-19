import { Component } from '@angular/core';
import { CalculateBobineFem } from "../calculate-bobine-fem/calculate-bobine-fem";
import { CalculateConductorFem } from "../calculate-conductor-fem/calculate-conductor-fem";
import { CalculateNormalFem } from "../calculate-normal-fem/calculate-normal-fem";

@Component({
  selector: 'app-main',
  imports: [CalculateBobineFem, CalculateConductorFem, CalculateNormalFem],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
showNormalComponent : boolean = false;
showConductorComponent : boolean = false;
showBobineComponent : boolean = true;

ShowNormalComponent(){
this.showNormalComponent  = true;
this.showConductorComponent = false;
this.showBobineComponent = false;

}
ShowBobineComponent(){
this.showNormalComponent  = false;
this.showConductorComponent = false;
this.showBobineComponent = true;
}
ShowConductorComponent(){
this.showNormalComponent  = false;
this.showConductorComponent = true;
this.showBobineComponent = false;
}
}
