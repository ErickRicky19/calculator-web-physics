export class RegexUtil {
  static readonly EXPLABEL: string = 'X10^';
  static readonly EXPTOOLTIP: string = 'Exponencial';
  static readonly RESTLABEL: string = '-';
  static readonly RESTTOOLTIP: string = 'Resta';
  static readonly NUMBERS_REGEX: RegExp = /^[0-9]*$/g;
  static readonly NUMBERS_INCLUDES_REGEX: string = '0123456789X10^';
  static readonly NORMAL_NUMBER_REGEX: RegExp = /^\d+(\.\d+)?$/;
  static readonly EXP_REGEX: RegExp = /^\d+(\.\d+)?X10\^\d+$/;
  static readonly EXP_X: string = 'X';
  static readonly EXP_1: string = '1';
  static readonly EXP_0: string = '0';
  static readonly EXP: string = '^';
}
