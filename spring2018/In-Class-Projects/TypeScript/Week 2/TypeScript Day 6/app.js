"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_1 = require("./category");
var utilityFunctions_1 = require("./utilityFunctions");
var shelf_1 = require("./shelf");
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: category_1.Category.Software, catalogNumber: 1 },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: category_1.Category.Software, catalogNumber: 1 },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: category_1.Category.Software, catalogNumber: 1 },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: category_1.Category.Software, catalogNumber: 1 }
];
var purgedBooks = utilityFunctions_1.Purge(inventory);
console.log(purgedBooks.length);
//let purgedBooks: Book[]; this line and the line above do the same thing
purgedBooks.forEach(function (book) { return console.log(book.title); });
var purgedNums = utilityFunctions_1.Purge([1, 2, 3, 4]);
console.log(purgedNums);
var shelf = new shelf_1.Shelf();
inventory.forEach(function (item) { return shelf.add(item); });
var magShelf = new shelf_1.Shelf();
var shelfOfNumbers = new shelf_1.Shelf();
shelfOfNumbers.add(1);
