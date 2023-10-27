import { Category } from "./category.model";

export class Product {
    constructor(
            public id: number,
            public name: string,
            public description: string,
            public image: string,
            public price: number,
            public quantity: number = 0,
            public categories: Category[]
        ){}
}
