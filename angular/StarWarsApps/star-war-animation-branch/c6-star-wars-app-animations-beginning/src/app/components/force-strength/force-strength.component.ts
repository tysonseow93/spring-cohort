import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'force-strength',
    templateUrl: './force-strength.component.html',
    styleUrls: ['./force-strength.component.css']
})
export class ForceStrengthComponent implements OnInit {
    _forceStrength: number;

    @Input()
    get forceStrength() {
        return this._forceStrength;
    }

    set forceStrength(strength: number) {
        this._forceStrength = strength;
        this.forceArr = [];
        for (let i = 0; i < this.forceStrength; i++) {
            this.forceArr.push(i.toString());
        }
    }

    forceArr = [];

    constructor() { }

    ngOnInit() {
    }

}
