import {CatalogItem} from "./catelogItem";

export interface Magazine extends CatalogItem{
    issueNumber: number;
    brand: string;

}