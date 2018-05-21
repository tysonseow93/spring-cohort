var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryBook = /** @class */ (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.checkOut = function () {
        //do stuff
        if (this instanceof ChildrenBook) {
            console.log("Checking out a Children's book");
        }
        else {
            console.log("Checking out an E-book book");
        }
        return this;
    };
    LibraryBook.prototype.checkIn = function () {
        //do stuff
        var book = (this instanceof ChildrenBook) ? " children's book" : " n E-book";
        console.log("Checking in a" + book + ".");
        //using if else statement
        // if(this instanceof ChildrenBook){
        //     console.log("Checking in a Children's book");
        // }else {
        //     console.log("Checking in an E-book book");
        // }
        return this;
    };
    return LibraryBook;
}());
var ChildrenBook = /** @class */ (function (_super) {
    __extends(ChildrenBook, _super);
    function ChildrenBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrenBook.prototype.clean = function () {
        //clean book..
        console.log("The book has been cleaned");
        return this;
    };
    return ChildrenBook;
}(LibraryBook));
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EBook.prototype.removeFromCustomerDevice = function () {
        //remove the book from the customer device
        console.log("the Ebook has been removed from the customer device");
        return this;
    };
    return EBook;
}(LibraryBook));
var kidBook = new ChildrenBook();
kidBook.checkIn().clean().checkOut();
var ebook = new EBook();
ebook.checkIn().removeFromCustomerDevice().checkOut();
// if(kidBook instanceof ChildrenBook){
//     kidBook.checkIn(kidBook.constructor.name).clean().checkOut(kidBook.constructor.name);
// }else {
//
// }
