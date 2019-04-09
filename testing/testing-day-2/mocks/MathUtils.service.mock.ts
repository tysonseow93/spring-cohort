import { Injectable } from '@angular/core';
@Injectable()
export class MockMathUtilService {

  add = function (firstValue: number, secondValue: number) {
    return 11;
  }
}
