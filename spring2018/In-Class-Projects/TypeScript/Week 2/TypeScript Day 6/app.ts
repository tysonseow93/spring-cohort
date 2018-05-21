import {Book} from "./book";
import {Category} from "./category";
import {Purge} from "./utilityFunctions";
import {Shelf} from "./shelf";
import {Magazine} from "./magazine";
import {CatalogItem} from "./catelogItem";

let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software, catalogNumber: 1},
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software, catalogNumber: 1 },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software, catalogNumber: 1 },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software, catalogNumber: 1 }
];

let purgedBooks: Array<Book> = Purge(inventory);
console.log(purgedBooks.length);
//let purgedBooks: Book[]; this line and the line above do the same thing
purgedBooks.forEach(book => console.log(book.title));

let purgedNums: Array<number> = Purge<number>([1,2,3,4]);
console.log(purgedNums);

let shelf = new Shelf<Book>();
inventory.forEach(item => shelf.add(item));

let magShelf = new Shelf<Magazine>();

let shelfOfNumbers = new Shelf<Number>();
shelfOfNumbers.add(1);

