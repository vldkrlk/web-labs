import { Product } from "./Product";

export class Marker extends Product {
    public readonly name: string;
    private _sort: number;

    constructor(quantity: number, price: number, name: string, sort: number) {
        super(quantity, price);
        this.name = name;

        if (!(sort > 0 && sort < 4)) {
            throw new Error("Invalid sort");
        }
        this._sort = sort;
    }

    public override getPrice(): number {
        return Math.round(super.getPrice() / this._sort);
    }
}