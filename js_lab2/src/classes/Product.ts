export class Product {
    private _quantity: number = 0;
    private _price: number = 0;

    constructor(quantity: number, price: number) {
        this._quantity = quantity;
        this._price = price;
    }

    public getPrice(): number {
        return this._price * this._quantity;
    }

    get quantity(): number {
        return this._quantity;
    }
}