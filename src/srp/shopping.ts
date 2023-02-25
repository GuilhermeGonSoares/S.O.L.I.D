interface Product {
  name: string;
  price: number;
}

export class ShoppingCart {
  private readonly _items: Product[] = [];
  private orderStatus: 'open' | 'closed' = 'open';

  addItem(item: Product): void {
    this._items.push(item);
  }

  removeItem(index: number): Product {
    return this._items.splice(index, 1)[0];
  }

  get items(): Readonly<Product[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this.orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }
  clear() {
    this._items.length = 0;
  }
  saveOrder() {
    console.log('Pedido salvo com sucesso');
  }
  sendMessage(msg: string) {
    console.log('Mensagem enviada:', msg);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: 'Camiseta', price: 49.9 });
cart.addItem({ name: 'Caderno', price: 29.9 });
cart.addItem({ name: 'Caneta', price: 10.911 });

console.log(cart.items);
// cart.items[0] = { name: 'teste', price: 10 }; Devido ao Readonly<Product[]> não é possível alterar os elementos de dentro do Array
console.log(cart.total());
cart.checkout();
console.log(cart.items);
console.log(cart.total());
