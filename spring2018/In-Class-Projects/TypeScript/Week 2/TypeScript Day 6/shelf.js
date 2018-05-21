"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// T in the export below is know as a wild card
var Shelf = /** @class */ (function () {
    function Shelf() {
    }
    Shelf.prototype.add = function (newItem) {
        this.items.push(newItem);
    };
    Shelf.prototype.getFirstItem = function () {
        return this.items[0];
    };
    return Shelf;
}());
exports.Shelf = Shelf;
