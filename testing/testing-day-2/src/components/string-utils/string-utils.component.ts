import { Component } from '@angular/core';
import { StringUtilService } from '../../services/StringUtil.service';

@Component({
  selector: 'string-utils',
  templateUrl: './string-utils.component.html',
  styleUrls: ['./string-utils.component.css']
})
export class StringUtilsComponent {

  constructor(private stringUtil: StringUtilService) {}
  lowercaseText : string = "";
  uppercaseText: string = "";
  concatenateTextOne;
  concatenateTextTwo;
  concatenatedTexts: string = ""

  toLowercaseText = function (textToModify : string) {
    this.lowercaseText = this.stringUtil.toLowercaseText(textToModify);
  }

  toUppercaseText = function (textToModify : string) {
    this.uppercaseText = this.stringUtil.toUppercaseText(textToModify);
  }

  concatenateTexts = function (textOne, textTwo) {
      this.concatenatedTexts = this.stringUtil.concatenateTexts(textOne, textTwo);
  }

}
