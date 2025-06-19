import { RegexUtil } from './regex-util';
import { Sweetalert } from './sweetalert';

export class InputTextOperatorHandler {
  static insertOperatorInInput(
    focusPoint: HTMLInputElement | null,
    operator: string
  ) {
    if (!focusPoint) {
      Sweetalert.error('Error', 'Ninguna entrada activa para insertar');
      return;
    }
    const cursorPosition = focusPoint.selectionStart || 0;
    const lasChar = focusPoint.value.charAt(cursorPosition - 1);

    if (cursorPosition === 0) {
      if (operator === RegexUtil.EXPLABEL) {
        Sweetalert.error('Error', 'No puede empezar con este operador');
        return;
      }
    }
    if (operator === RegexUtil.RESTLABEL && lasChar === RegexUtil.EXP_0) {
      Sweetalert.error('Error', 'Posicion invalida');
      return;
    }
    if (operator === RegexUtil.RESTLABEL && lasChar === RegexUtil.EXP_1) {
      Sweetalert.error('Error', 'Posicion invalida');
      return;
    }
    if (operator === RegexUtil.RESTLABEL && lasChar === RegexUtil.EXP_X) {
      Sweetalert.error('Error', 'Posicion invalida');
      return;
    }
    this.addOperatorAtInput(focusPoint, operator);
  }
  static addOperatorAtInput(focusInput: HTMLInputElement, operator: string) {
    const star = focusInput.selectionStart || 0;
    const end = focusInput.selectionEnd || 0;

    focusInput.value =
      focusInput.value.substring(0, star) +
      operator +
      focusInput.value.substring(end);
    focusInput.setSelectionRange(
      star + operator.length,
      star + operator.length
    );
    focusInput.focus();
  }
  static validateOperatorBalanced(operation: string): boolean {
    let count = 0;
    for (let i = 0; i <= operation.length; i++) {
      if (operation[i] === 'X') {
        count++;
        if (operation[i + 1] === '10') {
          count++;
          if (operation[i + 2] === '^') {
            count++;
            if (RegexUtil.NUMBERS_REGEX.test(operation[i + 3])) {
              count -= 3;
            }
          }
        }
      }
    }
    return count === 0;
  }
  static isValidateOperation(operation: string): boolean {
    if (operation === '') return true;

    const normalNumberRegex = /^-?\d+(\.\d+)?$/;

    const scientificRegex = /^-?\d+(\.\d+)?X10\^-?\d+$/;

    if (/--/.test(operation)) return false;

    const count = (operation.match(/X10\^/g) || []).length;
    if (count > 1) return false;

    return normalNumberRegex.test(operation) || scientificRegex.test(operation);
  }

  static replaceToExponential(expression: string): number {
    const regex = /^(\d+(\.\d+)?)X10\^(-?\d+)$/;

    const match = expression.match(regex);

    if (match) {
      const base = parseFloat(match[1]);
      const exponent = parseInt(match[3]);
      return base * Math.pow(10, exponent);
    }

    const value = parseFloat(expression);
    return isNaN(value) ? NaN : value;
  }
}
