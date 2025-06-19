import { Component } from '@angular/core';
import { RegexUtil } from '../../util/regex-util';
import { CalculateConductorFemService } from '../../services/calculate-conductor-fem';
import { InputTextOperatorHandler } from '../../util/input-text-operator-handler';
import { Sweetalert } from '../../util/sweetalert';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculate-conductor-fem',
  imports: [FormsModule],
  templateUrl: './calculate-conductor-fem.html',
  styleUrl: './calculate-conductor-fem.css',
})
export class CalculateConductorFem {
  camp: number = 0;
  long: number = 0;
  velocity: number = 0;
  result: number = 0;
  messege: string = 'Calculando: ';
  operators = [
    { label: RegexUtil.EXPLABEL, tooltip: RegexUtil.EXPTOOLTIP },
    { label: RegexUtil.RESTLABEL, tooltip: RegexUtil.RESTTOOLTIP },
  ];

  private _focus: HTMLInputElement | null = null;
  constructor(private conductorService: CalculateConductorFemService) {}

  onKeyPress(e: KeyboardEvent) {
    if (
      !RegexUtil.NUMBERS_INCLUDES_REGEX.includes(e.key) &&
      e.key !== 'Backspace'
    ) {
      e.preventDefault();
      return;
    }
    this.calculate();
  }
  onInputEvent() {
    this.calculate();
  }
  setFocusedOnInput(event: FocusEvent) {
    this._focus = event.target as HTMLInputElement;
    this.calculate();
  }

  calculate() {
    if (InputTextOperatorHandler.isValidateOperation(this.camp.toString()) && InputTextOperatorHandler.isValidateOperation(this.long.toString()) &&InputTextOperatorHandler.isValidateOperation(this.velocity.toString()) ) {
      const camp = InputTextOperatorHandler.replaceToExponential(
        this.camp.toString()
      );
      const l = InputTextOperatorHandler.replaceToExponential(
        this.long.toString()
      );
      const v = InputTextOperatorHandler.replaceToExponential(
        this.velocity.toString()
      );
      this.result = this.conductorService.calculateConductorFem(
        camp,
        l,
        v
      );
      this.messege = 'Resultado:';
    } else {
      Sweetalert.error('Error', 'Una operacion o varias son invalidas');
      this.result = 0;
      this.messege = 'Datos no validos: ';
    }
  }
  inserOperatorToTextBar(operator: string) {
    if (this._focus) {
      InputTextOperatorHandler.insertOperatorInInput(this._focus, operator);
      this.calculate();
    }
    this.calculate();
  }
}
