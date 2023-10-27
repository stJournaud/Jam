import { Order } from "./order.model";
import { Product } from "./product.model";

export class LineOrder {
    constructor (
        public id: number,
        public quantity: number,
        public subtotal: number,
        public orderAssociated: Order,
        public productAssociated: Product
        ) {}
}
