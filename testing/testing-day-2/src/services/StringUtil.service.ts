import { Injectable } from '@angular/core';
@Injectable()
export class StringUtilService {

  toUppercaseText = function (textToModify: string) {
    let newText : string = "";
    for (let i = 0; i < textToModify.length; i++) {
      newText = this.uppercaseMap[textToModify[i]] ?
        newText + this.uppercaseMap[textToModify[i]] :
          newText + textToModify[i];
    }
    return newText;
  }

  toLowercaseText = function (textToModify: string) {
    let newText : string = "";
    for (let i = 0; i < textToModify.length; i++) {
      newText = this.lowercaseMap[textToModify[i]] ?
        newText + this.lowercaseMap[textToModify[i]] :
          newText + textToModify[i];
    }
    return newText;
  }

  concatenateTexts = function (textOne, textTwo) {
    return textOne + textTwo;
  }

  lowercaseMap : Object = {
    A : "a",
    B : "b",
    C : "c",
    D : "d",
    E : "e",
    F : "f",
    G : "g",
    H : "h",
    I : "i",
    J : "j",
    K : "k",
    L : "l",
    M : "m",
    N : "n",
    O : "o",
    P : "p",
    Q : "q",
    R : "r",
    S : "s",
    T : "t",
    U : "u",
    V : "v",
    W : "w",
    X : "x",
    Y : "y",
    Z : "z",
  }

  uppercaseMap : Object = {
    a : "A",
    b : "B",
    c : "C",
    d : "D",
    e : "E",
    f : "F",
    g : "G",
    h : "H",
    i : "I",
    j : "J",
    k : "K",
    l : "L",
    m : "M",
    n : "N",
    o : "O",
    p : "P",
    q : "Q",
    r : "R",
    s : "S",
    t : "T",
    u : "U",
    v : "V",
    w : "W",
    x : "X",
    y : "Y",
    z : "Z",
  }
}
