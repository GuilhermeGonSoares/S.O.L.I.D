import { OrderStatus } from './interfaces/OrderStatus';
import { Messaging } from './messaginhg';
import { Persistence } from './persistence';
import { ShoppingCart } from './shopping';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage('Seu pedido foi recebido');
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
