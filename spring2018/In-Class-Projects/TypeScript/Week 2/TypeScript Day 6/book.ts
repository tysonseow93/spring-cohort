import {Category} from "./category";
import {CatalogItem} from "./catelogItem";

export interface Book extends CatalogItem{
    id: number,
    title: string,
    author: string,
    available: boolean,
    category: Category,
}