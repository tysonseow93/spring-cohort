import { Injectable } from '@angular/core';
@Injectable()
export class MathUtilService {

  add = function (firstValue: number, secondValue: number) {
    return firstValue + secondValue;
  }
}
