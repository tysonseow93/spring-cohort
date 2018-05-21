import {Category} from "./category";
import {CatalogItem} from "./catelogItem";

// T in the export below is know as a wild card
export class Shelf<T extends CatalogItem> {
    private items: Array<T>;

    add(newItem: T) {
        this.items.push(newItem);
    }

    getFirstItem(): T {
        return this.items[0];
    }
}