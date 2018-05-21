class LibraryBook{
    checkOut(): this {
        //do stuff
        if(this instanceof ChildrenBook){
            console.log("Checking out a Children's book");
        }else {
            console.log("Checking out an E-book book");
        }
            return this;
    }
    checkIn(): this {
        //do stuff


        let book = (this instanceof ChildrenBook) ? " children's book" : " n E-book";
        console.log(`Checking in a${book}.`);

//using if else statement
        // if(this instanceof ChildrenBook){
        //     console.log("Checking in a Children's book");
        // }else {
        //     console.log("Checking in an E-book book");
        // }

        return this;
    }
}

class ChildrenBook extends LibraryBook{
    clean(): this {
        //clean book..
        console.log("The book has been cleaned");
        return this;
    }
}

class EBook extends LibraryBook{
    removeFromCustomerDevice(): this{
        //remove the book from the customer device
        console.log("the Ebook has been removed from the customer device");
        return this;
    }
}

let kidBook = new ChildrenBook();
kidBook.checkIn().clean().checkOut();
let ebook = new EBook();
ebook.checkIn().removeFromCustomerDevice().checkOut();

// if(kidBook instanceof ChildrenBook){
//     kidBook.checkIn(kidBook.constructor.name).clean().checkOut(kidBook.constructor.name);
// }else {
//
// }

