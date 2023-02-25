import { ProductInterface } from './interfaces/ProductInterface';
export class ShoppingCart {
  private readonly _items: ProductInterface[] = [];

  addItem(item: ProductInterface): void {
    this._items.push(item);
  }

  removeItem(index: number): ProductInterface {
    return this._items.splice(index, 1)[0];
  }

  get items(): Readonly<ProductInterface[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  clear() {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
