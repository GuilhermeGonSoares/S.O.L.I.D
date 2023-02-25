import { ProductInterface } from './interfaces/ProductInterface';

export class Product implements ProductInterface {
  constructor(public name: string, public price: number) {}
}
