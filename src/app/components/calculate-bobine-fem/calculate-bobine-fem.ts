import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculateBobineFemService } from '../../services/calculate-bobine-fem-service';
import { FormsModule } from '@angular/forms';
import { RegexUtil } from '../../util/regex-util';
import { InputTextOperatorHandler } from '../../util/input-text-operator-handler';
import { Sweetalert } from '../../util/sweetalert';


@Component({
  standalone: true,
  selector: 'app-calculate-bobine-fem',
  templateUrl: './calculate-bobine-fem.html',
  styleUrls: ['./calculate-bobine-fem.css'],
  imports: [ FormsModule],
  providers: [CalculateBobineFemService]
})
export class CalculateBobineFem {
  nBobines: number = 0;
  campI: number = 0;
  campF: number = 0;
  t: number = 0;
  result: number = 0;
  messege : string = 'Calculando: ';
  operators = [
    {label: RegexUtil.EXPLABEL , tooltip: RegexUtil.EXPTOOLTIP},
    {label: RegexUtil.RESTLABEL , tooltip: RegexUtil.RESTTOOLTIP}

  ]

  private _focus : HTMLInputElement | null = null;
  constructor(private bobineService: CalculateBobineFemService) {}

  onKeyPress(e : KeyboardEvent) {
    if(!RegexUtil.NUMBERS_INCLUDES_REGEX.includes(e.key) && e.key !== 'Backspace'){
      e.preventDefault();
      return;
    }
    this.calculate()
  }
  onInputEvent() {
    this.calculate()

  }
  setFocusedOnInput(event:FocusEvent) {
    this._focus = event.target as HTMLInputElement;
    this.calculate()
  }

  calculate(){
        if(InputTextOperatorHandler.isValidateOperation(this.campF.toString()) &&InputTextOperatorHandler.isValidateOperation(this.nBobines.toString()) &&InputTextOperatorHandler.isValidateOperation(this.campI.toString()) &&InputTextOperatorHandler.isValidateOperation(this.t.toString())){
         const nBobines = InputTextOperatorHandler.replaceToExponential(this.nBobines.toString());
         const campf =InputTextOperatorHandler.replaceToExponential(this.campF.toString());
         const campi = InputTextOperatorHandler.replaceToExponential(this.campI.toString());
         const t = InputTextOperatorHandler.replaceToExponential(this.t.toString());
    this.result = this.bobineService.CalculateBobineFem(nBobines, campf, campi, t);
    this.messege = 'Resultado:'
        }else{
          Sweetalert.error('Error', 'Una operacion o varias son invalidas');
          this.result = 0;
          this.messege = 'Datos no validos: ';
        }
  }
  inserOperatorToTextBar(operator: string){
    if(this._focus){
      InputTextOperatorHandler.insertOperatorInInput(this._focus, operator);
      this.calculate();
    }
    this.calculate();
  }
}
