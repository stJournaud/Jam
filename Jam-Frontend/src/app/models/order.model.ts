import { LineOrder } from "./line-order.model";

export class Order {
    constructor(
        public id: number,
        public dateTime: Date,
        public total: number,
        public lines: LineOrder[],
        public Status: string
    ){}
}
