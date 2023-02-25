import { OrderStatus } from './interfaces/OrderStatus';
import { Messaging } from '../services/messaginhg';
import { Persistence } from '../services/persistence';
import { ShoppingCart } from './shopping';
import { CustomerOrder } from './interfaces/Customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistence: Persistence,
    private readonly customer: CustomerOrder,
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
    this.message.sendMessage(
      `Seu pedido no valor de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
