export interface Discount {
  calcula(price: number): number;
}

export class AplicaDiscount implements Discount {
  constructor(private readonly discount: number) {}

  calcula(price: number): number {
    return (1 - this.discount / 100) * price;
  }
}
